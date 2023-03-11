import React, { Component } from 'react'
import LifecycleD from './E24_LifecycleD';

class LifecycleC extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Saurabh"
        }
        console.log("LifecycleC -> constructor()");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleC -> getDerivedStateFromProps()");
        return null
    }

    componentDidMount() {
        console.log("LifecycleC -> componentDidMount()");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("LifecycleC -> shouldComponentUpdate()");
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log("LifecycleC -> getSnapshotBeforeUpdate()");
        return null
    }

    componentDidUpdate() {
        console.log("LifecycleC -> componentDidUpdate()");
    }

    handleClick = () => {
        this.setState({ name: "Suman" })
    }

    render() {
        console.log("LifecycleC -> render()");
        return (
            <div>
                <h3>Lifecycle A</h3>
                <LifecycleD />
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default LifecycleC
