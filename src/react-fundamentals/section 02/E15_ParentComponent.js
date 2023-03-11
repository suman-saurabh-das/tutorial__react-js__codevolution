import React, { Component } from 'react'
import ChildComponent from './E15_ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: "Parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent

/*
    Passing methods as props from parent to child component -
    We can call a method from the parent component in the child component by passing the method from parent to child component as a prop.
    We can also pass a parameter when calling the parent component method from child component.
    Arrow function is very helpful in this scenario.
*/
