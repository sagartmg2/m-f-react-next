import { useState } from "react"


export default function counter() {
    let inital_value = 10

    let [count, setCount] = useState(inital_value)  // returns [ 10, mutaterFunction     ]

    function increment() {
        console.log("increment")
        // count++
        // console.log({ count })
        // setCount((prev) => prev + 1)
        setCount(++count)
    }


    console.log("re-render")

    return (
        <>
            <h1>count<span id="count"> {count} </span> </h1>
            <button onClick={increment}>increment</button>
        </>
    )
}
