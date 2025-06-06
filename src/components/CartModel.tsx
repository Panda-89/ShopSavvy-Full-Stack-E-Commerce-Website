"use client"
import Image from "next/image"
import { useCartStore } from '@/hooks/useCartStore'
import { media as wixMedia } from '@wix/sdk'
import { useWixClient } from "@/hooks/USeWixClient"
import { currentCart } from "@wix/ecom"


const CartModel = () => {

    const wixClient = useWixClient()
    const {cart, isLoading, removeItem } = useCartStore()


    // this will work only when we make wix to accept payments which can be done only 
    // when we upgrade or take subscription on wixStudio

    const handleCheckout = async () => {
        try {
          const checkout =
            await wixClient.currentCart.createCheckoutFromCurrentCart({
              channelType: currentCart.ChannelType.WEB,
            });

            console.log(checkout)
    
          const { redirectSession } =
            await wixClient.redirects.createRedirectSession({
              ecomCheckout: { checkoutId: checkout.checkoutId },
              callbacks: {
                postFlowUrl: window.location.origin,
                thankYouPageUrl: `${window.location.origin}/success`,
              },
            });
    
          if (redirectSession?.fullUrl) {
            window.location.href = redirectSession.fullUrl;
          }
        } catch (err) {
          console.log(err);
        }
      };

      //We can select the different regions for shipping and 
      // different delivery options on wix using settings-> delivery and shipping options
      
  return (
    <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
{!cart.lineItems ? (
    <div>
        Cart is Empty
    </div>
) : (
    <>
    <h2 className='text-xl'> Shopping Cart </h2>
    {/* List */}

    <div className='flex flex-col gap-8'>
    {/* Item */}
    {cart.lineItems.map((item) => (
        <div className='flex gap-4' key={item._id}>
        {item.image && (
            <Image
                src={wixMedia.getScaledToFillImageUrl(
                      item.image,
                      72,
                      96,
                      {}
                    )}
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
            />
        )}
        <div className='flex flex-col justify-between w-full'>
            {/* top */}
            <div>
                {/* Title */}
                <div className='flex items-center justify-between gap-8'>
                    <h3 className='font-semibold'>{item.productName?.original}</h3>
                    <div className='p-1 bg-gray-50 rounded-sm flex items-center gap-2'>
                    {item.quantity && item.quantity > 1 && (
                          <div className="text-xs text-green-500">
                            {item.quantity} x{" "}
                          </div>
                        )}
                        {item.price?.formattedAmount}
                        </div>
                </div>
                {/* Description */}
                <div className='text-xs text-gray-500'>
                    {item.availability?.status}
                </div>
            </div>

            {/* Bottom */}
            <div className='flex justify-between text-xs'>
                <span className='text-gray-500'>Qty. {item.quantity}</span>
                <span 
                className='text-blue-500'
                style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                onClick={() => removeItem(wixClient, item._id!)}
                >
                    Remove
                </span>
            </div>
        </div>
    </div>
))}


    </div>

    {/* Bottom */}
    <div className=''>
        <div className='flex items-center justify-between font-semibold'>
            <span className=''>Subtotal</span>
            <span className=''>{cart.subtotal.formattedAmount}</span>
        </div>
        <p className='text-gray-500 text-sm mt-2 mb-4'>
        Shipping and taxes calculated at checkout.
        </p>
        <div className='flex justify-between text-sm'>
            <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'> View Cart </button>
            <button 
            className='rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75 cursor-pointer' 
            disabled={isLoading}
            onClick={handleCheckout}
            >
              CheckOut 
            </button>
        </div>
    </div>
    </>
)}
    </div>
  )
}

export default CartModel