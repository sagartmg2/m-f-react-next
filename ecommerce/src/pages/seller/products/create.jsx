import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Upsert({ product }) {

    // const [data, setData] = useState({
    //     name: "",
    //     price: "",
    //     description: "",
    //     categories: [
    //         ""
    //     ],
    //     images: []
    // })


    const router = useRouter();

    const [data, setData] = useState(product)

    useEffect(() => {
        setData(product)
    }, [product])


    function handleSubmit(e) {
        e.preventDefault()

        let form_data = new FormData();
        form_data.append("name", data.name)
        form_data.append("price", data.price)
        form_data.append("description", data.description)

        data.categories.forEach(cat => {
            form_data.append("categories[]", cat)
        })

        let temp = [...data.images]
        temp.forEach(img => {
            form_data.append("images[]", img)
        })

        let url = "https://ecommerce-sagartmg2.vercel.app/api/products"

        if (router.query.slug) {
            url = "https://ecommerce-sagartmg2.vercel.app/api/products/" + router.query.slug
            axios.put(url, form_data, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("access_token")
                }
            })

            return;
        }

        axios.post(url, form_data, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token")
            }
        })
    }

    function handleChange(e) {
        console.log(e)
        console.log(e.target.files)
        console.log(e.target.value)


        setData({ ...data, [e.target.name]: e.target.type == "file" ? [...data.images, ...e.target.files] : e.target.value })
    }

    function handleCategories(e, index) {
        let temp = [...data.categories]
        temp[index] = e.target.value
        setData({ ...data, categories: temp })
    }

    return (
        <div className="container">

            <form className='container' onSubmit={handleSubmit}  >

                <div class="mb-6">
                    <label class=" form-label">Nme</label>
                    <input type="text" name='name' value={data.name}
                        onChange={handleChange}
                        className="form-control" placeholder="" />
                </div>
                <div class="mb-6">
                    <label class=" form-label">Price</label>
                    <input type="text" name='price' value={data.price}
                        onChange={handleChange}
                        className="form-control" placeholder="" />
                </div>
                <div class="mb-6">
                    <label class=" form-label">description</label>
                    <textarea type="text" name='description' value={data.description}
                        onChange={handleChange}
                        className="form-control" placeholder="" />
                </div>
                <div class="mb-6">
                    <label class=" form-label">categories
                        <button onClick={() => {
                            let temp = [...data.categories]
                            temp.push("")

                            setData({
                                ...data,
                                categories: temp
                            })

                        }} type='button' className='border p-3'> Add Category</button>
                    </label>
                    {
                        data.categories?.map((cat, index) => {
                            return <input type="text" name='categories' value={cat}
                                onChange={(e) => {
                                    handleCategories(e, index)
                                }}
                                className="form-control mb-2" placeholder="" />
                        })
                    }

                </div>
                <div class="mb-6">
                    <label class=" form-label">images</label>
                    <input type="file" multiple name='images'
                        onChange={handleChange}
                        className="form-control" placeholder="" />

                    {
                        data.images?.map((img, index) => {

                            let src = img

                            if (typeof (img) !== "string") {
                                src = URL.createObjectURL(img)
                                console.log(src)
                            }

                            return <div className='inline-block relative '>
                                <img className='inline-block' src={src} height={150} width={150} />
                                <span onClick={() => {
                                    let temp = [...data.images]
                                    temp = temp.filter((el, idx) => idx != index)
                                    setData({ ...data, images: temp })

                                }} className='absolute -top-5 right-0 bg-red-500 p-3 text-white rounded-full'>X</span>
                            </div>
                        })
                    }
                </div>
                <button type="submit" class="text-white disabled:bg-blue-100 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Submit</button>

            </form >
        </div>
    )
}
