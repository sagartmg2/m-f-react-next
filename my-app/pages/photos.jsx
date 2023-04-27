import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function photos() {
  const [images, setImages] = useState([])

  useEffect(() => {
    /* component did mount */
    axios.get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        console.log(res.data);
        setImages(res.data)
      })
  }, [])
  return (
    <>
      list of photos

    {
      images.length == 0
      &&
      <p>loading..</p>
    }

      <hr />
      {
        images.map(img =>{
          return <img src={img.thumbnailUrl}/> 
        })
      }
    </>

  )
}




