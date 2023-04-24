import { useState } from "react"

const Login = () => {

    // let input_value = "test"
    const [input_value, setInputValue] = useState()

    function changeInput(event) {
        setInputValue(event.target.value)

    }

    return <form>

        <p>input vlaue is {input_value}</p>
        <input onChange={changeInput} />
        <input />
        <button>submit</button>

    </form>
}

export default Login