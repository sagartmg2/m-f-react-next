import ProtctedPage from '@/components/ProtctedPage'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'


function Order() {
    let redux_user = useSelector((redux_store) => redux_store.user.value)

    let router = useRouter()
    useEffect(() => {
        if (!redux_user) {
            router.push("/login")
        }
    }, [])

    return (
        <div>order</div>
    )
}

export default ProtctedPage(Order, "buyer")
