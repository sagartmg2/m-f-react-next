import Header from '@/components/Header'
import axios from 'axios'
import React from 'react'

export default function Signup() {

  function handleSubmit(event) {
    event.preventDefault()

    axios.post("https://ecommerce-sagartmg2.vercel.app/api/users/signup", {
      "name": "",
      "role": "",
      "password": "password",
      "email": "ram@ram1.com"
    })
      .catch(err => {
        console.log(err)
      })

  }

  return (
    <>
      <Header />

      <form className='container' onSubmit={handleSubmit}  >
        <div class="mb-6">
          <label for="email" class="form-label">Name</label>
          <input type="email" id="email" class="form-control" placeholder="name@flowbite.com" />
        </div>
        <div class="mb-6">
          <label for="email" class=" form-label">Your email</label>
          <input type="email" id="email" className="form-control" placeholder="name@flowbite.com" />
        </div>
        <div class="mb-6">
          <label for="password" class="form-label">Your password</label>
          <input type="password" id="password" class="form-control" />
        </div>
        <div class="mb-6">
          <label for="password" class="form-label">Role</label>
          <select className='form-control'>
            <option>Select</option>
            <option>Buyer</option>
            <option>Seller</option>
          </select>
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>

    </>
  )
}
