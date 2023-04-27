import axios from 'axios'
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'

export default function SingleUser() {

    const [user, setuser] = useState({});
    const { query, isReady } = useRouter()
    console.log(query)
    console.log(query.slug)
    console.log({ isReady })

    useEffect(() => {
        console.log("use-effect")
        if (isReady) {
            axios.get("https://jsonplaceholder.typicode.com/users/" + query.slug)
                .then(res => {
                    setuser(res.data)
                })
        }
    }, [isReady])

    return (
        <>
            <div>single user</div>
            <hr />
            {JSON.stringify(user)}
        </>

    )
}
