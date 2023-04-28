import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Children(props) {

    const user = useSelector((store) => { return store.user.value })
    // useDispatch
    
    return (
        <div>Children :{user}</div>
    )
}
