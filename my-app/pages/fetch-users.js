import React from 'react'
import axios from "axios"

export default function FetchUsers() {

    function fetchUsersData() {

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log(res.data)
            })
    }

    return (
        <>
            <button onClick={fetchUsersData}>
                fetch-usrs
            </button>
            <hr />
        </>
    )
}
