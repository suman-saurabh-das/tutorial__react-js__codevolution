import React, { Component } from 'react'

class RefDemo2 extends Component {
    constructor(props) {
        super(props)

        this.callbackRef = null
        this.setCallbackRef = (element) => {
            this.callbackRef = element
        }
    }

    componentDidMount() {
        // React will call the setCallBackRef with the DOM element when the component mounts and call it with null when the component unmounts, so we will check if there is a value in the callBackRef property and it is not null.
        // Here we do not need current property, we can directly access the DOM node.
        if (this.callbackRef) {
            this.callbackRef.focus()
        }
    }

    render() {
        return (
            <div>
                {/* input element is implicitly passed as a parameter which is assigned to the callBackRef property */}
                <input type="text" ref={this.setCallbackRef} />
            </div>
        )
    }
}

export default RefDemo2

/*
    Creating a ref by creating a property and assigning it a value null (callback approach) - old approach.

    Step 1 - Create a property and assign it a null value.
    Step 2 - Create a method which will assign a DOM element to the ref.
    Step 3 - Attach the ref to the input element.
    Step 4 - In componentDidMount() we will call the focus method.
*/
