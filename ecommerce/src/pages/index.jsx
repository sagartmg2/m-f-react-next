
import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Image from 'next/image'
import ChairImg from "@/assets/chair.png"
import LatestProduct from '@/components/LatestProduct'

import axios from "axios"
import { useEffect, useState } from 'react'


/* 
  CURD operations
  create  -POSt
  update  -PUT
  read  - GET
  delete -DELETE

  HTTP request methods

  STATUS CODES
    2 200 201, 203 204  // success 
    3 // redicrect
    4 // react dev error // client error
      401 - unauntenticated . not logged in 
    5 // backedn dev error
*/

export default function Home({ user, products }) {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios.get("https://ecommerce-sagartmg2.vercel.app/api/products")
  //     .then(res => {
  //       console.log(res.data.data[0].data)
  //       setProducts(res.data.data[0].data)
  //     })
  // }, [])



  return (
    <>
      <Banner />
      <div className='mt-32 container'>
        <h2 className='text-4xl font-semibold text-header text-center mb-12'>Trending Products</h2>
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
        {products.length == 0 && <p>loading...</p>}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ' >
          {
            products.map(product => {
              return <LatestProduct product={product} key={product._id} />
            })
          }
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  // export async function getStaticProps() {

  let res = await axios.get("https://ecommerce-sagartmg2.vercel.app/api/products?per_page=6")
  // .then(res => {
  //   console.log()
  //   setProducts(res.data.data[0].data)
  // })

  return {
    props: {
      products: res.data.data[0].data
    },
  }
}
