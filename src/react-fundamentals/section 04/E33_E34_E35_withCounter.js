import React, { Component } from 'react'

// const UpdatedComponent = (OriginalComponent) => {
const withCounter = (WrappedComponent, incrementValue = 1) => {
    // class NewComponent extends Component {
    class WithCounter extends Component {
        constructor(props) {
            super(props)
            this.state = { count: 0 }
        }

        incrementCount = () => {
            this.setState((prevState) => ({ count: prevState.count + incrementValue }))
        }

        render() {
            console.log(this.props.name);
            // return <OriginalComponent/>
            return (<WrappedComponent
                count={this.state.count}
                incrementCount={this.incrementCount}
                { ...this.props }
                // Here HOC adds 2 props to the Wrapped component and passes the rest via spread operator
            />)
        }
    }
    // return NewComponent
    return WithCounter
}

// export default UpdatedComponent
export default withCounter

/*
    This is a basic HOC component.
    File naming convention is camelCase instead of PascalCase.
    This HOC accepts the OriginalComponent and returns a NewComponent with the name prop.

    Since, we need the counter functionality for both components, we will add the constructor and incrementCount method in the UpdateComponent and pass the state and incrementCount method as props so that original component can make use of the property
*/

/* Naming convention - 
    UpdatedComponent is refered using the file name or function name that will be added.
    OriginalComponent is refered as WrappedCoponent. (component wrapped with the HOC)
    NewComponent is same as file name or function name but in PascalCase.
*/

/*
    Passing down props -
    In ClickCounter.js we are trying to access name prop passed from App.js component to the ClickCounter.js component.
    But we are unable to access the prop here, because the prop from App.js gets passed to the HOC (WithCounter.js) and it is accessible in the HOC but it is not passed to the component that it wraps. To fix this issue, we need to pass the props from the Wrapped component using the spread operator.

    Passing Parameters to the HOC function -
    Say we want to increment the count value via different numbers for both counter components, we can do so by passing parameters to the HOC function.
*/
