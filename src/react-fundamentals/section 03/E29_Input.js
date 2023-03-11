import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }

    // We are creating a method to focus the input element instead of using componentDidUpdate() method this method will be called by the parent component.
    focusInput = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
            </div>
        )
    }
}

export default Input
