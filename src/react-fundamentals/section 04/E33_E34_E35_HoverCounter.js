import React, { Component } from 'react'
import withCounter from './E33_E34_E35_withCounter'

class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }

    // incrementCount = () => {
    //     this.setState((prevState) => {
    //         return { count: prevState.count + 1 }
    //     })
    // }

    render() {
        // const {count} = this.state
        const { count, incrementCount, name } = this.props
        return (
            <div>
                {/* <h2 onMouseOver={this.incrementCount}>Hovered {count} times</h2> */}
                <h3 onMouseOver={incrementCount}>{name} Hovered {count} times</h3>
            </div>
        )
    }
}

export default withCounter(HoverCounter, 5)

/*
    Here we are duplicating the code for the counter.
    But we need our code to be DRY (don't repeat yourself), for this we have 2 solutions

    Solution 1 - Lift the counter logic to Parent and pass props
    i.e. counter logic will be written in the parent i.e. App.js and we will pass count variable as a prop this will work in our scenario, where both ClickCounter.js and HoverCounter.js are part of the same parent (App.js)

    Solution 2 - But if the counter components are scattered in the React component tree, lifting the state will not be a great solution. So there is need for sharing common functionality between components without repeating code.
    So we will be using Higher order components.

    Why Higher order components ? -> To share common functionality between components.

    Higher Order Components (HOC) -
    A pattern where a function takes a component as an argument and returns a new component.
    A HOC adds additional data or functionality to components without code repetition.

    const NewComponent = higherOrderComponent(OriginalComponent)
    const EnhancedComponent = higherOrderComponent(OriginalComponent)

    e.g. const IronMan = withSuit(TonyStark)
*/
