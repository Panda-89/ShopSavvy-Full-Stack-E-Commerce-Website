"use client"
import React, { useState } from 'react'
import Image from "next/image"

// const images =[
//     {
//         id:1,
//         url : "https://images.pexels.com/photos/31861761/pexels-photo-31861761/free-photo-of-young-woman-in-outdoor-floral-setting.jpeg?auto=compress&cs=tinysrgb&w=600" 
//     },
//     {
//         id:2,
//         url : "https://images.pexels.com/photos/31861754/pexels-photo-31861754/free-photo-of-young-woman-with-umbrella-in-floral-setting.jpeg?auto=compress&cs=tinysrgb&w=600"
//     },
//     {
//         id:3,
//         url : "https://images.pexels.com/photos/31861760/pexels-photo-31861760/free-photo-of-young-girl-posing-in-blooming-garden.jpeg?auto=compress&cs=tinysrgb&w=600"
//     },
//     {
//         id:4,
//         url : "https://images.pexels.com/photos/31861760/pexels-photo-31861760/free-photo-of-young-girl-posing-in-blooming-garden.jpeg?auto=compress&cs=tinysrgb&w=600"
//     }
// ]

const ProductImages = ({items} : {items:any}) => {

    const [index,setIndex] = useState(0)

  return (
    <div className=''>
        <div className='h-[500px] relative'>
            <Image 
             src={items[index].image?.url}
             alt=''
             fill
             sizes='vw'
             className='object-cover rounded-md'
            />
        </div>
        <div className='flex justify-between gap-4 mt-8'>
            {items.map((item:any, i:number) => (
                <div className='w-1/4 h-32 relative gap-8 mt-8 cursor-pointer' key={item._id} onClick={() => setIndex(i)}>
                <Image 
                 src={item.image?.url} 
                 alt='' 
                 fill 
                 sizes="30vw" 
                 className='object-cover rounded-md'
                />
            </div>
            ))}
        </div>
    </div>
  )
}

export default ProductImages