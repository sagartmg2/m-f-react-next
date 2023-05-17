import Header from '@/components/Header'
import { setReduxUser } from '@/redux/slice/userSlice'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Login({ user, setUser }) {

  const dispatch = useDispatch()
  const router = useRouter();

  let [email, setEmail] = useState("b@b.com")

  // let [filed_errors,setFieldErros] = useState({})  
  let [error, setErros] = useState("")  // invalidat create

  const [isSubmitting, setisSubmitting] = useState(false);

  function handleSubmit(event) {



    event.preventDefault()

    /* 
      check if our form datas are valid
      

    */

    let temp = {} // temp  = { name:"required",email:"required" }
    let validation = true;


    // if (!email) {
    //   temp.email = "required field"
    //   validation = false;
    // }

    // setErros(temp)

    if (validation) {
      setisSubmitting(true)
      axios.post("https://ecommerce-sagartmg2.vercel.app/api/users/login", {
        "password": event.target.password.value,
        "email": email
      })
        .then(res => {
          console.log("set redux user")
          dispatch(setReduxUser(res.data.user))
          localStorage.setItem("access_token", res.data.access_token)
          // setUser(res.data.user)
          setisSubmitting(false)
          router.push("/")
        })
        .catch(err => {
          setisSubmitting(false)

          console.log(err)
          // let arr = res.data.errors
          // let temp = {}
          setErros(err.response.data.msg)

        })
    }


  }

  console.log("render...");

  return (
    <>
      <form className='container' onSubmit={handleSubmit}  >
        {
          error
          &&
          <p className='bg-red-200  p-3'  >{error}</p>
        }
        <div class="mb-6">
          <label htmlFor="email" class=" form-label">Your email</label>
          <input type="email" name='email' value={email} onChange={(e) => {
            setEmail(e.target.value)
          }} id="email" className="form-control" placeholder="name@flowbite.com" />

        </div>
        <div class="mb-6">
          <label htmlFor="password" class="form-label">Your password</label>
          <input type="password" name='password' value={"password"} id="password" class="form-control" />
        </div>
        <button type="submit" disabled={isSubmitting} class="text-white disabled:bg-blue-100 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{isSubmitting && "spinner.."} Submit</button>
        <p>Not a user ? <Link href={"/signup"}>  singup</Link></p>
      </form>

    </>
  )
}
