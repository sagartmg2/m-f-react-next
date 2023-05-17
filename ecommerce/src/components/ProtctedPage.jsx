
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


export default function ProtctedPage(PageComponent, role) {

  function Wrapper() {

    let { isLoading, value: redux_user } = useSelector((redux_store) => redux_store.user)
    let router = useRouter()

    if (isLoading) {
      return <><p>Loading....</p></>
    } else if (!redux_user) {
      router.push("/login")
    } else if (role && redux_user.role !== role) {
      return <><p>Forbidden</p></>
    }

    return <>
      <PageComponent />
    </>
  }

  return Wrapper

}
