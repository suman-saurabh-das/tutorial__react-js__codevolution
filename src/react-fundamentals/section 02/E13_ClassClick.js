import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler = () => {
        console.log("Button clicked from class component");
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Class Click</button>
            </div>
        )
    }
}

export default ClassClick

/*
    Creating a click handler event in class component is similar to the functional component,
    but we will have to access the event handler function using the this keyword.
    NOTE - When we define a function inside the class, we do not use the function keyword.
*/
