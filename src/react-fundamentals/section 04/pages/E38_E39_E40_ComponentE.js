import React, { Component } from 'react'
import ComponentF from './E38_E39_E40_ComponentF'
import UserContext from '../E38_E39_E40_UserContext'

class ComponentE extends Component {
    // We can also replace the ComponentE.contextType = UserContext by the following
    static contextType = UserContext
    render() {
        return (
            <div>
                <h2>Component E context {this.context} </h2>
                <ComponentF />
            </div>
        )
    }
}

// ComponentE.contextType = UserContext
export default ComponentE
