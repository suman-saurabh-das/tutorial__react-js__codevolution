import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h2>Class Count : {this.state.count}</h2>
                <button onClick={this.incrementCount}>++Count</button>
            </div>
        )
    }
}

export default ClassCounter

/*
    Steps to create a counter
    1. Create a class component
    2. Create a state variable initialised to zero (count: 0)
    3. Create a method that is capable of setting the state value (incrementCount())
*/
