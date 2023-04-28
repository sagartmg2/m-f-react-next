import Parent from '@/components/Parent'
import React from 'react'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

export default function root() {
    let user = "Ram"
    return (
        <>
            root:{user}
            <hr />
            <Provider store={store}>
                <Parent user={user} />
            </Provider>
        </>
    )
}
