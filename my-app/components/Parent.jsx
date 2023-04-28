import React from 'react'
import Children from './Children'

export default function Parent(props) {
    return (
        <div>
            parent:{props.user}
            <hr />
            <Children />
        </div>
    )
}
