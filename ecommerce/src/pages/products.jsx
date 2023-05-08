import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'
import { AiOutlineOrderedList } from 'react-icons/ai'
import axios from 'axios'
import { BsFillGrid1X2Fill } from 'react-icons/bs'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function products({ products, categories }) {
  const router = useRouter()
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
            <select name="" id="" onChange={(e) => {

              console.log(router)

              router.push(`${router.route}?per_page=${e.target.value}`)

            }}>
              <option value="3">3</option>
              <option value="5"> 5</option>
              <option value="10"> 10</option>
            </select>
          </div>
          <div>
            <label>Sort By:</label>
            <select name="" id="">
              <option value="nameasc"> name asc</option>
              <option value="namedesc"> name desc</option>
              <option value="priceasc"> price asc</option>
              <option value="pricedesc"> price desc</option>
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
        <div className=' select-none'>
          <div >
            <p>Categories</p>
            {
              categories.map((cat, index) => {
                return <>
                  <div>
                    <input onChange={(e) => {
                      router.push(`${router.route}?search_term=${e.target.name}`)
                    }} type='checkbox' id={`${cat}-${index}`} name={`${cat}`} /> <label htmlFor={`${cat}-${index}`} >{cat}</label>
                  </div>
                </>
              })
            }

          </div>

        </div>
        <div className='grid gap-3  col-start-2 col-end-5'>
          {
            products.map(product => {
              return <div className='border p-3 flex gap-3 shadow-md'>
                <Image className="w-1/4" src={product.images[0]} width={1000} height={1000} />
                <div>
                  <p className='text-2xl uppercase'>{product.name}</p>
                  <p>Rs.{product.price}</p>
                  <button className='border bg-secondary text-white p-1 '>Add To Cart</button>
                </div>

              </div>
            })
          }
        </div>
      </div>
    </>
  )
}





export async function getServerSideProps(ctx) { // appContext
  // export async function getStaticProps() {


  // let url = `https://ecommerce-sagartmg2.vercel.app/api/products?per_page=3&search_term=${ctx.query.search_term}`
  let url = `https://ecommerce-sagartmg2.vercel.app/api/products?`

  let params = Object.entries(ctx.query)
  params.forEach(parameter => {
    url += `${parameter[0]}=${parameter[1]}&`
  })
  console.log({ url });

  let res = await axios.get(url)

  let categories_res = await axios.get("https://ecommerce-sagartmg2.vercel.app/api/products/categories")


  return {
    props: {
      products: res.data.data[0].data,
      categories: categories_res.data,
    }
  }
}
