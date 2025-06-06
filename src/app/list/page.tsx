import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/skeleton";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image"
import { Suspense } from "react";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();

  const cat = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );

  
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
            {/* Campaign */}
            <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
                <div className="w-2/3 flex flex-col items-center justify-center gap-8">
                <h1 className="text-4xl font-semibold loading-[48px] text-gray-700">Grap up to 50% off on 
                    <br /> selected products</h1>
                <button className="rounded-3xl bg-red-600 text-white w-max text-sm py-3 px-5">Buy Now</button>
                </div>
                <div className="relative w-1/3">
                    <Image src="/woman.png" alt="" fill className="object-contain" />
                </div>
            </div>
            {/* Filter */}
            <Filter/>
            {/* Products */}
            <h1 className="mt-12 text-xl font-semibold">{cat.collection?.name} for you!</h1>
            <Suspense fallback={<Skeleton/>}>
        <ProductList
          categoryId={
            cat.collection?._id || "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
        </div>
    )
}

export default ListPage;