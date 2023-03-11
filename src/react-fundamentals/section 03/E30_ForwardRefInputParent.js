import React, { Component } from 'react'
import ForwardRefInput from './E30_ForwardRefInput'

class ForwardRefInputParent extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <ForwardRefInput ref={this.inputRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ForwardRefInputParent

/*
    When we click on the button in parent component, the child component should receive focus
    However unlike the last tutorial where the ref was pointing to the class component, we will use the forwarding ref technique to allow the parent component to directly reference the input element.

    Step 1 - Create a ref called inputRef in parent component.
    Step 2 - Attach the inputRef to the child component using the ref attribute.
    Step 3 - Forward the ref into the input element in child component (ref forwarding can be achieved by using the forwardRef() method from the react library.)
    Step 4 - Use on click handler to focus the child input element.
*/
