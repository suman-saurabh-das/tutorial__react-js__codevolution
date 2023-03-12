import React, { Component } from 'react'

export class ClassCounter2 extends Component {
    initialState = 0
    constructor(props) {
        super(props)

        this.state = {
            count: this.initialState
        }
    }

    incrementFive = () => {
        this.setState((prevState) => ({count: prevState.count + 5}))
    }
    decrementFive = () => {
        this.setState((prevState) => ({count: prevState.count - 5}))
    }

    render() {
        return (
            <div>
                <h2>Class Count : {this.state.count}</h2>
                <button onClick={() => this.setState({ count: this.initialState })}>Reset</button>
                <button onClick={() => this.setState(prevState => ({ count: prevState.count + 1 }))}> Increment </button>
                <button onClick={() => this.setState(prevState => ({ count: prevState.count - 1 }))}> Decrement </button>
                <button onClick={this.incrementFive}>Incrment by 5</button>
                <button onClick={this.decrementFive}>Decrment by 5</button>
            </div>
        )
    }
}

export default ClassCounter2
