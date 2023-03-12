import React, { Component } from 'react'
import { UserConsumer } from '../E38_E39_E40_UserContext'

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username) => {
                        return <h2>Name {username}</h2>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF
