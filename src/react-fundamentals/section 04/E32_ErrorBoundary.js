import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }

    render() {
        if(this.state.hasError) {
            return <h3 style={{color: "red"}}>Something went wrong !</h3>
        } else {
            return this.props.children
            // referes to the component that we are rendering
        }
    }
}

export default ErrorBoundary


/*
    We can handle error via 2 methods
    
    Method 1 - static getDerivedStateFromError(error)
        This method takes in error and can be used to set the value of a state variable based on the error. And based on this state variable, we can conditionally render our UI.

        Placing of error boundary -
        NOTE - We should separately enclose the components using error boundary so that when there is an error with a single component only that component will render the error UI and rest of the components will render as it is.
        We can wrap the top level component or the nested components separately.

    Method 2 - componentDidCatch(error, info)
        This method takes 2 arguments error and info, we cannot use this method to setState & render UI based on state variable but we can console log the errors (displaying error logs is redundant as it is always displayed).
        It is mainly used for error logging service.

    Error boundaries catch error during rendering, in lifecycle methods & in the constructors of the whole tree below them.
    However they do not catch errors inside the onClick handlers (for handlers, we can use try-catch block)
*/
