import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function photos({ images }) {

  return (
    <>
      list of photos

      <hr />
      {
        images.map(img => {
          return <img src={img.thumbnailUrl} />
        })
      }
    </>

  )
}

export async function getServerSideProps() {
  let res = await axios.get("https://jsonplaceholder.typicode.com/photos")


  return {
    props: {
      images: res.data
    }
  }
}




