import React, { Component } from 'react'

class WelcomePropsDestructuring extends Component {
    render() {
        const { name, heroName } = this.props
        // const { state1, state2 } = this.state
        return (
            <div>
                <h2>Hello {name} a.k.a {heroName}</h2>
            </div>
        )
    }
}

export default WelcomePropsDestructuring

/*
    In case of class components, we tend to destructure props in the render method.
    NOTE - We can also destructure only the required components from the props (all components are not required).
*/
