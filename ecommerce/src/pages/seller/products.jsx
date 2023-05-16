import React, { useEffect, useState } from 'react'
import SellerProducts from "@/components/Products"
import axios from 'axios';
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';

export default function Products() {

    let redux_user = useSelector((redux_store) => { redux_store.user.value })
    let router = useRouter()

    const [products, setproducts] = useState([]);
    const [metadata, setMetaData] = useState({});
    const [categories, setCategories] = useState([]);


    useEffect(() => {

        if (!redux_user) {
            router.push("/login")
        }

        async function fetchProducts() {
            let url = `https://ecommerce-sagartmg2.vercel.app/api/products?`

            axios.get(url, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("access_token")
                }
            })
                .then(res => {
                    setproducts(res.data.data[0].data)
                    setMetaData(res.data.data[0].metadata[0])
                })

            axios.get("https://ecommerce-sagartmg2.vercel.app/api/products/categories")
                .then(categories_res => {
                    setCategories(categories_res.data)
                })

        }

        fetchProducts()


    }, [])

    return (
        <>
            <SellerProducts products={products} categories={categories} metadata={metadata} />
        </>
    )
}

// export function getServerSideProps(ctx) {

//     return {
//         redirect: {
//             destination: "/login",
//             permanent: false
//         }
//     }
// }



