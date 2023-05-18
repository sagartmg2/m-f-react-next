import { SELLER } from '@/const/roles';
import React from 'react'
import { useSelector } from 'react-redux'

export default function SellerComponent({ children }) {
    const reudx_user = useSelector(store => store.user.value)
    if (reudx_user && reudx_user.role == SELLER) {
        return (
            <>
                {children}
            </>
        )
    }
    return null;

}
