import React, { Component } from 'react'
import withCounter from './E33_E34_E35_withCounter'

class ClickCounter extends Component {
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
        // const { count } = this.state
        const { count, incrementCount, name } = this.props
        return (
            <div>
                {/* <button onClick={this.incrementCount}>Clicked {count} times</button> */}
                <button onClick={incrementCount}>{name} Clicked {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter, 10)

/*
    Steps to use an HOC to enhance a component
    
    Step 1 - import UpdatedComponent from HOC component inside the component to be enhanced.
    Step 2 - while exporting the component to be enhanced (ClickCounter.js), pass the original component (ClickCounter.js) as a paramter to the UpdatedComponent.
    Step 3 - Now we will be able to use the data or function which is added from the HOC.
*/
