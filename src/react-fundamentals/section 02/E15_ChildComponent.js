import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler("Child")}>Greetings !</button>
        </div>
    )
}

export default ChildComponent
