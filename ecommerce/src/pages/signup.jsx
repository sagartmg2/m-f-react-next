import Header from '@/components/Header'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Signup() {

  const router = useRouter()

  let [name, setName] = useState("")
  let [email, setEmail] = useState("")

  // let [errors, setErros] = useState([])
  let [error, setErros] = useState({

  })

  function handleSubmit(event) {



    event.preventDefault()

    /* 
      check if our form datas are valid
      

    */

    let temp = {} // temp  = { name:"required",email:"required" }
    let validation = true;

    if (!name) {
      temp.name = "required"
      validation = false
    }
    if (!email) {
      temp.email = "required field"
      validation = false;
    }

    setErros(temp)

    if (validation) {
      axios.post("https://ecommerce-sagartmg2.vercel.app/api/users/signup", {
        "name": name,
        "role": event.target.role.value,
        "password": event.target.password.value,
        "email": email
      })
        .then(res => {
          router.push("/login")
        })
        .catch(err => {
          console.log(err)
          // let arr = res.data.errors
          let temp = {}
          if (err.response.data.errors && err.response.data.errors?.length > 0) {
            err.response.data.errors.forEach(individual_error => {
              temp[individual_error.param] = individual_error.msg
            })

            setErros(temp)
          }
        })
    }





  }

  console.log("render...");

  return (
    <>
      <Header />

      <form className='container' onSubmit={handleSubmit}  >
        <div class="mb-6">
          <label htmlFor="email" class="form-label">Name</label>
          <input type="text" name="name" value={name} onChange={(e) => {
            setName(e.target.value)

            if (e.target.value) {
              setErros({ ...error, name: "" })
            } else {
              setErros({ ...error, name: "required" })

            }

          }} class="form-control" placeholder="" />
          {
            error.name
            &&
            <small className='text-red-500'>{error.name}</small>
          }
        </div>
        <div class="mb-6">
          <label htmlFor="email" class=" form-label">Your email</label>
          <input type="email" name='email' value={email} onChange={(e) => {
            setEmail(e.target.value)
            if (e.target.value) {
              setErros({ ...error, email: "" })
            } else {
              setErros({ ...error, email: "required" })

            }
          }} id="email" className="form-control" placeholder="name@flowbite.com" />
          {
            error.email
            &&
            <small className='text-red-500'>{error.email}</small>
          }
        </div>
        <div class="mb-6">
          <label htmlFor="password" class="form-label">Your password</label>
          <input type="password" name='password' id="password" class="form-control" />
          {
            error.password
            &&
            <small className='text-red-500'>{error.password}</small>
          }
        </div>
        <div class="mb-6">
          <label htmlFor="password" class="form-label">Role</label>
          <select className='form-control' name='role'  >
            <option>Select</option>
            <option selected value={"buyer"}>Buyer</option>
            <option value={"seller"}>Seller</option>
          </select>
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        <p>Already a user ? <Link href={"/login"}>login</Link></p>

      </form>

    </>
  )
}
