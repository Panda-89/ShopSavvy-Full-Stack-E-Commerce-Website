import React from 'react'
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <div className='py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24'>
    {/* TOP */}
    <div className='flex flex-col md:flex-row justify-between gap-24'>
      {/* LEFT */}
      <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
      <Link href="/">
      <div className='text-2xl tracking-wide'>Shop-Savvy</div>
      </Link>
      <p>31, Coronation Street, Mumbai, Maharashtra, India</p>
      <span className='font-semibold'>hello@shopsavvy.com</span>
      <span className='font-semibold'>+91 9456734356 </span>
      <div className='flex gap-6'>
        <Image src="/facebook.png" alt='' width={16} height={16} />
        <Image src="/instagram.png" alt='' width={16} height={16} />
        <Image src="/youtube.png" alt='' width={16} height={16} />
        <Image src="/pinterest.png" alt='' width={16} height={16} />
        <Image src="/x.png" alt='' width={16} height={16} />
      </div>
      </div>
      {/* CENTER */}
      <div className='w-1/2 hidden lg:flex justify-between'>
        <div className='flex flex-col justify-between'>
          <h1 className='font-medium text-lg'>COMPANY</h1>
          <div className='flex flex-col gap-6'>
            <Link href="">About Us</Link>
            <Link href="">Careers</Link>
            <Link href="">Affiliators</Link>
            <Link href="">Blog</Link>
            <Link href="">Contact Us</Link>
          </div>
        </div>

        <div className='flex flex-col justify-between'>
          <h1 className='font-medium text-lg'>SHOP</h1>
          <div className='flex flex-col gap-6'>
            <Link href="">New Arrivals</Link>
            <Link href="">Accessories</Link>
            <Link href="">Men</Link>
            <Link href="">Women</Link>
            <Link href="">All Products</Link>
          </div>
        </div>

        <div className='flex flex-col justify-between'>
          <h1 className='font-medium text-lg'>HELP</h1>
          <div className='flex flex-col gap-6'>
            <Link href="">Customer Service</Link>
            <Link href="">My Account</Link>
            <Link href="">Find a Store</Link>
            <Link href="">Legal & Privacy</Link>
            <Link href="">Gift Card</Link>
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
      <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
      <p>Be the first to get the latest news about trends, promotions, and much more!</p>
      <div className='flex'>
        <input type="text" placeholder='Email Address' className='p-4 w-3/4 bg-white
        ' />
        <button className='w-1/4 bg-blue-700 text-white'>JOIN</button>
      </div>
        <span className='font-semibold'>Secure Payments</span>
        <div className='flex justify-between'>
          <Image src="/discover.png" alt='' width={40} height={40} />
          <Image src="/skrill.png" alt='' width={40} height={40} />
          <Image src="/paypal.png" alt='' width={40} height={40} />
          <Image src="/mastercard.png" alt='' width={40} height={40} />
          <Image src="/visa.png" alt='' width={40} height={40} />
        </div>
      </div>
    </div>

    {/* BOTTOM */}
    <div className='flex flex-col md:flex-row  items-center justify-between gap-8 mt-16'>
      <div className=''> @ 2025 ShopSavvy User Friendly Shop </div>
      <div className='flex flex-col gap-8 md:flex-row'> 
        <div className=''>
          <span className='text-gray-500 mr-4'> Language </span>
          <span className='font-medium'> India | Hindi, English </span>
        </div>
        <div className=''>
          <span className='text-gray-500 mr-4'> Currency </span>
          <span className='font-medium'> INR (Indian Rupees) </span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer