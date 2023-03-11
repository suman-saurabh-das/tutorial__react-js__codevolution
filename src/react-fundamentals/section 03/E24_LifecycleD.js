import React, { Component } from 'react'

class LifecycleD extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Saurabh"
        }
        console.log("LifecycleD -> constructor()");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleD -> getDerivedStateFromProps()");
        return null
    }

    componentDidMount() {
        console.log("LifecycleD -> componentDidMount()");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("LifecycleD -> shouldComponentUpdate()");
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log("LifecycleD -> getSnapshotBeforeUpdate()");
        return null
    }

    componentDidUpdate() {
        console.log("LifecycleD -> componentDidUpdate()");
    }

    render() {
        console.log("LifecycleD -> render()");
        return (
            <div>
                <h3>Lifecycle D</h3>
            </div>
        )
    }
}

export default LifecycleD
