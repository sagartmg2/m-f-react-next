import React from 'react'
import Image from 'next/image'
import ChairImg from "@/assets/chair.png"
import NoImage from "@/assets/Image_not_available.png"
import { AiOutlineShoppingCart } from "react-icons/ai"

export default function LatestProduct({ product }) {
    let { name, price, images } = product
    return (
        <div className='border shadow relative hover:border-primary group  '>
            {/* <Image src={ChairImg} alt='' className='bg-[#F6F7FB]  w-full ' height={200} width={200} /> */}
            {
                images.length == 0
                    ?
                    <Image src={NoImage} alt='' className='bg-[#F6F7FB]  w-full object-contain aspect-square ' height={200} width={200} />
                    :
                    <Image src={images[0]} alt='' className='bg-[#F6F7FB]  w-full object-contain aspect-square ' height={200} width={200} />


            }

            <div className='hidden group-hover:flex  p-2 absolute top-[50%] left-3  bg-primary-tint h-14 w-14 flex justify-center items-center rounded-full'>
                <AiOutlineShoppingCart size={2} className='h-6 w-6' />
            </div>



            <div className='flex justify-between p-2'>
                <p className='text-secondary text-xl'>{name}</p>
                <p className='text-header'>${price}</p>
            </div>
        </div>
    )
}
