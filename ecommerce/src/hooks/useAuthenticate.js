import React from 'react'
import { useSelector } from 'react-redux'

export default function useAuthenticate() {
    const redux_user = useSelector(store => store.user.value)

    return (cb) =>{
        if(redux_user){
            cb()
        }else{
            alert("login equred...")
        }
        
    }
}



// export default function useState(initial_dat) {

//     return [initial_dat,() =>{}]
 
// }
