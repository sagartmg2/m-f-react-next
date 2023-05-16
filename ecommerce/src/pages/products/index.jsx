import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'
import { AiOutlineOrderedList } from 'react-icons/ai'
import axios from 'axios'
import { BsFillGrid1X2Fill } from 'react-icons/bs'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/slice/cartSlice'
import AllProducts from '@/components/Products'

export default function Products(props) {
  return <AllProducts {...props} />
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
      metadata: res.data.data[0].metadata[0],
      categories: categories_res.data,
    }
  }
}
