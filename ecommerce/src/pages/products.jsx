import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'
import { AiOutlineOrderedList } from 'react-icons/ai'
import axios from 'axios'
import { BsFillGrid1X2Fill } from 'react-icons/bs'
import Image from 'next/image'

export default function products({ products }) {
  return (
    <>
      <Header />
      <div className='py-24 bg-primary-tint'>
        <div className='container'>
          <p className='text-3xl text-header font-bold'>Shop Left Sidebar</p>
          <p>
            <Link href={"/"}>Home</Link> . <Link href={"/products"}>Products</Link></p>
        </div>
      </div>
      <div className='container py-24 flex flex-col md:flex-row justify-between items-center text-center gap-4'>
        <div>
          <p className='font-bold text-xl text-header'>Ecommerce Acceories & Fashion item </p>
          <p>total - 50</p>
        </div>
        <form className='flex gap-3'>
          <div>
            <label htmlFor="">Per Page: </label>
            <select name="" id="">
              <option value=""> 25</option>
              <option value=""> 50</option>
              <option value=""> 100</option>
            </select>
          </div>
          <div>
            <label>Sort By:</label>
            <select name="" id="">
              <option value=""> name asc</option>
              <option value=""> name desc</option>
              <option value=""> price asc</option>
              <option value=""> price desc</option>
            </select>
          </div>
          <div>
            View:
            <AiOutlineOrderedList className='inline ml-3' />
            <BsFillGrid1X2Fill className='inline ml-3' />
          </div>

        </form>
      </div>
      <div className="container md:grid  md:grid-cols-4">
        <div>
          filters....
        </div>
        <div className=' col-start-2 col-end-5'>
          {
            products.map(product => {
              return <div className='border p-3 flex'>
                <Image className="w-1/4" src={product.images[0]} width={1000} height={1000} />
                  info
                </div>
            })
          }

              </div>

      </div>



      </>
      )
}



      export async function getServerSideProps() {
        // export async function getStaticProps() {

        let res = await axios.get("https://ecommerce-sagartmg2.vercel.app/api/products")

      return {
        props: {
        products: res.data.data[0].data
    },
  }
}
