import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { AiOutlineMail, AiOutlineSearch } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { logout, setReduxUser } from '@/redux/slice/userSlice'


export default function SocialNavBar({ user, setUser }) {

    /* faly values  - false, null, undefined, 0, "", NaN  */

    let logged_in = user  // {name:byer..role,email} : null 

    let redux_user = useSelector((redux_store) => { return redux_store.user.value }) // null  {name}
    let cart_items = useSelector((redux_store) => { return redux_store.cart_items.value })
    let dispatch = useDispatch()

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
                        redux_user
                            ?
                            <>


                                <li>
                                    <Link href={"/"}>{redux_user?.name} </Link>
                                </li>
                                <li className='cursor-pointer' onClick={() => {
                                    // setUser(null)
                                    // dispatch(setReduxUser(null))
                                    dispatch(logout())
                                }}>
                                    logout
                                </li>
                            </>
                            :
                            <li>
                                <Link href={"/login"}>login </Link>
                            </li>
                    }
                    <li>
                        <Link href={"/cart"}>cart <span>( {cart_items?.length} ) </span> </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
