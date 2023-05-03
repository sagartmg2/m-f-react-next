
import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Image from 'next/image'
import ChairImg from "@/assets/chair.png"


export default function Home({ user }) {
  return (
    <>
      <Header />
      <Banner />
      <div className='mt-32 container'>
        <h2 className='text-4xl font-semibold text-header text-center mb-12'>Featured Products</h2>
        <div className='flex flex-wrap justify-between'>
          <div className='border shadow basis-[270px] flex-grow  '>
            <Image src={ChairImg} className='bg-[#F6F7FB] w-full ' height={200} width={200} w-full />
            <div className='text-center'>
              <p className='text-secondary text-xl'>Cantilever chair</p>
              <p className='text-header'>code: XYZ</p>
              <p className='text-header'>$ 100</p>
            </div>
          </div>
          <div className='border shadow basis-[270px] flex-grow '>
            <Image src={ChairImg} className='bg-[#F6F7FB] w-full ' height={200} width={200} w-full />
            <div className='text-center'>
              <p className='text-secondary text-xl'>Cantilever chair</p>
              <p className='text-header'>code: XYZ</p>
              <p className='text-header'>$ 100</p>
            </div>
          </div>
          <div className='border shadow basis-[270px] flex-grow '>
            <Image src={ChairImg} className='bg-[#F6F7FB] w-full ' height={200} width={200} w-full />
            <div className='text-center'>
              <p className='text-secondary text-xl'>Cantilever chair</p>
              <p className='text-header'>code: XYZ</p>
              <p className='text-header'>$ 100</p>
            </div>
          </div>
          <div className='border shadow basis-[270px] flex-grow '>
            <Image src={ChairImg} className='bg-[#F6F7FB] w-full ' height={200} width={200} w-full />
            <div className='text-center'>
              <p className='text-secondary text-xl'>Cantilever chair</p>
              <p className='text-header'>code: XYZ</p>
              <p className='text-header'>$ 100</p>
            </div>
          </div>
          <div className='border shadow basis-[270px] flex-grow '>
            <Image src={ChairImg} className='bg-[#F6F7FB] w-full ' height={200} width={200} w-full />
            <div className='text-center'>
              <p className='text-secondary text-xl'>Cantilever chair</p>
              <p className='text-header'>code: XYZ</p>
              <p className='text-header'>$ 100</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
