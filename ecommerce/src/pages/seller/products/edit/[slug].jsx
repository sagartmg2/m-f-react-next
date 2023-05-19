import React, { useEffect, useState } from 'react'
import Upsert from '../create'
import { useRouter } from 'next/router'
import axios from 'axios';

export default function edit() {

    const router = useRouter();
    let [product, setProduct] = useState({})

    useEffect(() => {

        if (router.isReady) {
            axios.get(`https://ecommerce-sagartmg2.vercel.app/api/products/${router.query.slug}`)
                .then(res => {
                    setProduct(res.data.data)
                })
        }

    }, [router.isReady])


    return (
        <Upsert product={product} />
    )
}
