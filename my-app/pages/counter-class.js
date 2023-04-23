import React from "react"

class Counter extends React.Component {
    constructor() {
        super();
        this.state = { count: 110 };
        this.increment = this.increment.bind(this)
    }

    increment() {
        console.log("increment");
        this.setState({
            count: this.state.count + 1
        })

    }

    render() {
        console.log("render")
        return <>
            <h1>count:{this.state.count}</h1>
            <button onClick={this.increment}>increment</button>
        </>
    }

}

export default Counter