import React from 'react'

function User(props) {
    return (
        <div>
            <h4>{props.render(true)}</h4>
        </div>
    )
}

export default User
