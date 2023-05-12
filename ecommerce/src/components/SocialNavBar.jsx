import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { AiOutlineMail, AiOutlineSearch } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs"


export default function SocialNavBar({ user }) {

    let logged_in = user

    return (
        <nav className='bg-primary text-white  p-3'>
            <div className="container flex justify-between">
                <ul className='md:flex gap-3'>
                    <li>
                        <a href="mailto: abc@example.com" ><AiOutlineMail className='inline' /> mm@mm.com</a>
                    </li>
                    <li>
                        <a href="tel:984022222" ><BsFillTelephoneFill className='inline' /> 984000</a>
                    </li>
                </ul>
                <ul className='md:flex gap-3'>
                    {
                        logged_in
                            ?
                            <>
                                <li>
                                    <Link href={"/"}>{user?.name} </Link>
                                </li>
                                <li>
                                    <Link href={"/cart"}>cart </Link>
                                </li>
                            </>
                            :
                            <li>
                                <Link href={"/login"}>login </Link>
                            </li>
                    }
                </ul>
            </div>
        </nav>
    )
}
