import React from 'react'
import Image from 'next/image'
import BannerImage from "@/assets/promotional.png"

export default function Banner() {
    return (
        <>
            {/* <div className="relative">
        <Image src={Banner} className='w-full' />
        <div className="absolute top-0">
          <div className="container">
            <p className='text-secondary font-bold' >Best Furniture For Your Castle....</p>
            <h1 className='text-5xl font-bold'>New Furniture Collection
              Trends in 2020</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
              in phasellus non in justo.
            </p>
            <button className='bg-secondary text-white py-5 px-7'>
              Shop Now
            </button>
          </div>

        </div>
      </div> */}
            {/* <div className=' py-48 bg-[url("../assets/promotional.png")] bg-cover bg-no-repeat  '> */}
            <div className=' py-48 bg-banner-image bg-cover bg-no-repeat  '>
                <div className="container">
                    <div className="w-1/2">
                        <p className='text-secondary font-bold mb-3' >Best Furniture For Your Castle....</p>
                        <h1 className='text-5xl font-bold mb-3'>New Furniture Collection
                            Trends in 2020</h1>
                        <p className='mb-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                            in phasellus non in justo.
                        </p>
                        <button className='bg-secondary text-white py-3 px-6'>
                            Shop Now

                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
