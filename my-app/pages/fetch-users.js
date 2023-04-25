import React, { useState } from 'react'
import axios from "axios"

export default function FetchUsers() {


    /* 
        CRUD operations
            - Create
            - read 
            - update
            - delete
        
        request HTTP methods
            
            - Create  - POST
            - read  - GET
            - update  - PUT / PATCH
            - delete - DELETE
    
    */

    // let users = [
    //     { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz' }
    // ];

    const [users, setUser] = useState([])




    function fetchUsersData() {

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log(res.data) // [{},{}]
                // users = res.data
                console.log("users", users)
                setUser(res.data)
            })
    }
    console.log("render")

    let content = { a: 1 }
    return (
        <>
            {/* <p>users : {JSON.stringify(users)}  </p> */}

            <button onClick={fetchUsersData}>
                fetch-usrs
            </button>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
