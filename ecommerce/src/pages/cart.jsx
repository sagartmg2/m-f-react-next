import Header from '@/components/Header'
import ProtctedPage from '@/components/ProtctedPage'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function Cart() {


  return (
    <>
      <section>
        <h1>Lis tof cart items</h1>
      </section>
    </>
  )
}

/* HOC - higher order component */

export default ProtctedPage(Cart, "buyer")

