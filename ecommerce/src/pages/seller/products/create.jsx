import React, { useState } from 'react'
import axios from 'axios'

export default function create() {

    const [data, setData] = useState({
        name: "",
        price: "",
        description: "",
        categories: [],
        images: []
    })

    function handleSubmit(e) {
        e.preventDefault()

        let form_data = new FormData();
        form_data.append("name", data.name)
        form_data.append("price", data.price)
        form_data.append("description", data.description)

        let temp = [...data.images]

        temp.forEach(img => {
            form_data.append("images[]", img)
        })

        axios.post("https://ecommerce-sagartmg2.vercel.app/api/products", form_data, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token")
            }
        })
    }

    function handleChange(e) {
        console.log(e)
        console.log(e.target.files)
        console.log(e.target.value)


        setData({ ...data, [e.target.name]: e.target.type == "file" ? e.target.files : e.target.value })

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
                    <label class=" form-label">categories</label>
                    <input type="text" name='categories' value={data.categories}
                        onChange={handleChange}
                        className="form-control" placeholder="" />
                </div>
                <div class="mb-6">
                    <label class=" form-label">images</label>
                    <input type="file" multiple name='images'
                        onChange={handleChange}
                        className="form-control" placeholder="" />
                </div>
                <button type="submit" class="text-white disabled:bg-blue-100 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Submit</button>

            </form >
        </div>
    )
}
