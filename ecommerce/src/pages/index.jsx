
import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Image from 'next/image'
import ChairImg from "@/assets/chair.png"
import { AiOutlineShoppingCart } from "react-icons/ai"


export default function Home({ user }) {
  return (
    <>
      <Header />
      <Banner />
      <div className='mt-32 container'>
        <h2 className='text-4xl font-semibold text-header text-center mb-12'>Featured Products</h2>
        <div className='flex flex-wrap gap-7 justify-center'>
          <div className='border shadow basis-[270px]   '>
            <Image src={ChairImg} className='bg-[#F6F7FB] w-full ' height={200} width={200} />
            <div className='text-center'>
              <p className='text-secondary text-xl'>Cantilever chair</p>
              <p className='text-header'>code: XYZ</p>
              <p className='text-header'>$ 100</p>
            </div>
          </div>
          <div className='border shadow basis-[270px]  '>
            <Image src={ChairImg} className='bg-[#F6F7FB] w-full ' height={200} width={200} />
            <div className='text-center'>
              <p className='text-secondary text-xl'>Cantilever chair</p>
              <p className='text-header'>code: XYZ</p>
              <p className='text-header'>$ 100</p>
            </div>
          </div>
          <div className='border shadow basis-[270px]  '>
            <Image src={ChairImg} className='bg-[#F6F7FB] w-full ' height={200} width={200} />
            <div className='text-center'>
              <p className='text-secondary text-xl'>Cantilever chair</p>
              <p className='text-header'>code: XYZ</p>
              <p className='text-header'>$ 100</p>
            </div>
          </div>
          <div className='border shadow basis-[270px]  '>
            <Image src={ChairImg} className='bg-[#F6F7FB] w-full ' height={200} width={200} />
            <div className='text-center'>
              <p className='text-secondary text-xl'>Cantilever chair</p>
              <p className='text-header'>code: XYZ</p>
              <p className='text-header'>$ 100</p>
            </div>
          </div>
          <div className='border shadow basis-[270px]  '>
            <Image src={ChairImg} className='bg-[#F6F7FB] w-full ' height={200} width={200} />
            <div className='text-center'>
              <p className='text-secondary text-xl'>Cantilever chair</p>
              <p className='text-header'>code: XYZ</p>
              <p className='text-header'>$ 100</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-32 container'>
        <h2 className='text-4xl font-semibold text-header text-center mb-12'>Latest Products</h2>
        {/* <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap:"1rem"
        }}> */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ' >
          <div className='border shadow  '>
            <Image src={ChairImg} className='bg-[#F6F7FB]  w-full ' height={200} width={200} />
            <div className='flex justify-between p-2'>
              <p className='text-secondary text-xl'>Cantilever chair</p>
              <p className='text-header'>$100</p>
            </div>
          </div>
          <div className='border shadow relative hover:border-primary group  '>
            <Image src={ChairImg} className='bg-[#F6F7FB]  w-full ' height={200} width={200} />

            <div className='hidden group-hover:block  p-2 absolute top-[50%] left-3  bg-primary-tint h-8 w-8 flex justify-center items-center rounded-full'>
              <AiOutlineShoppingCart size={2} className='h-6 w-6' />
            </div>

            <div className='flex justify-between p-2'>
              <p className='text-secondary text-xl'>Cantilever chair</p>
              <p className='text-header'>$100</p>
            </div>
          </div>
          <div className='border shadow  '>
            <Image src={ChairImg} className='bg-[#F6F7FB]  w-full ' height={200} width={200} />
            <div className='flex justify-between p-2'>
              <p className='text-secondary text-xl'>Cantilever chair</p>
              <p className='text-header'>$100</p>
            </div>
          </div>
          <div className='border shadow  '>
            <Image src={ChairImg} className='bg-[#F6F7FB]  w-full ' height={200} width={200} />
            <div className='flex justify-between p-2'>
              <p className='text-secondary text-xl'>Cantilever chair</p>
              <p className='text-header'>$100</p>
            </div>
          </div>
          <div className='border shadow  '>
            <Image src={ChairImg} className='bg-[#F6F7FB]  w-full ' height={200} width={200} />
            <div className='flex justify-between p-2'>
              <p className='text-secondary text-xl'>Cantilever chair</p>
              <p className='text-header'>$100</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
