import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Hello to the world !"
        }

        /* Method 3 - Binding event handler in constructor instead of render method */
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState(
    //         { message: "Shutting down ! dun dun dun dun" }
    //     )
    //     console.log(this);  // Here this keyword will be undefined untill we bind it.
    //     // After binding the this keyword, we will be able to access the this keywords properties.
    // }

    /* 
        Method 4 - Using arrow function as a class property
        Basically we are changing the way to define the method in class i.e.
        Using arrow function instead of function keyword
    */
    clickHandler = () => {
        this.setState(
            { message: "Shutting down ! dun dun dun dun" }
        )
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                {/* Method 1 - Use bind keyword and bind the handler in the render method */}
                {/* <button onClick={this.clickHandler.bind(this)}>Log Off !</button> */}

                {/* Method 2 - Using arrow function in the render method, here we are using arrow function to run the clickHandler() method (calling the eventHandler method and returning the value), so we are using () and we can omit {} after => as there is a single return statement*/}
                {/* <button onClick={() => this.clickHandler()}>Log Off !</button> */}

                {/* Method 3 - Binding event handler in constructor instead of render method */}
                {/* <button onClick={this.clickHandler}>Log Off !</button> */}

                {/* Method 4 - Using arrow function as a class property */}
                <button onClick={this.clickHandler}>Log Off !</button>
            </div>
        )
    }
}

export default EventBind

/*
    We need to bind event handlers in react purely because of how the this keyword works in JS.

    Reason why binding is needed when using this keyword ->
        When we use this keyword inside a function which was created using function keyword.
            Syntax -> function functionName() { ... }
        then it creates its own context for the this keyword and it does not have the context for the outer function. i.e. here we will only be able to access the properties present inside the function using this keyword. To avoid this and to make sure that we are able to access the properties of outer function, we need binding.

        Alternatively, we can also use arrow functions instead of functions created using the function keyword, this is because when we use an arrow function, it does not create its own context and the this here refers to its parents context.

    In this tutorial, we will try to change the message which is part of component state
    
    Methods of event binding with this keyword
        1. Use bind keyword and bind the handler in the render method.
        2. Using arrow function in render method - Calling the event handler in arrow function body.
            
            Disadvantage of method 1 & 2 - Every update to the state will cause the component to re-render. So it is not ideal in cases where a large component is being updated or if it has lots of nested components.
            Impact can become severe in large / nested components.
            Advantage - Simpler to use and pass parameters.
        
        3. Binding event handler in constructor instead of render method.

            Advantage - Because binding happens once in the constructor, it is better than binding in the render method.

        4. Use an arrow function as a class property
            Advantage - Renders only once.
*/
