import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { AiOutlineMail, AiOutlineSearch } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs"
import SocialNavBar from './SocialNavBar'

export default function Header({user}) {
  const router = useRouter()


  function handleSearch(e) {
    e.preventDefault()
    router.push("/products?search_term=" + e.target.search_term.value)
  }
  return (
    <header >
     <SocialNavBar user={user}/>
      <nav className='container text-center md:flex p-4'>
        <Link href={"/"} className='text-4xl font-bold text-[#0D0E43]'>Hekto</Link>
        <div className='md:flex md:flex-grow justify-between items-center md:pl-20 '>
          <ul className='md:flex gap-3'>
            <li>
              <Link className='text-secondary' href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/products"}>Products</Link>
            </li>
          </ul>
          <form className='flex mt-3' onSubmit={handleSearch}>
            <input type="text" name='search_term' className='border w-full outline-none px-2' />
            <button className='bg-secondary text-white p-2 inline'>
              <AiOutlineSearch className=' inline' />
            </button>
          </form>
        </div>

      </nav>

    </header >
  )
}
