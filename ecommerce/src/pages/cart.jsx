import Header from '@/components/Header'
import ProtctedPage from '@/components/ProtctedPage'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {

  let redux_user = useSelector((redux_store) => { redux_store.user.value })
  let router = useRouter()

  if(!redux_user){
    router.push("/login")
  }

  return (
    <>
      <section>
        <h1>Lis tof cart items</h1>
      </section>
    </>
  )
}

// export default ProtctedPage(Cart)

