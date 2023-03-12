import React, { useState } from 'react'

function HookCounter2() {
    const initialState = 0
    const [count, setCount] = useState(initialState)

    const increment5 = () => {
        for (let i = 0; i < 5; i++) {
            setCount((prevCount) => prevCount + 1)
        }
        // Here we are passing a function that has access to the old value and we are incrementing that by 1
    }

    const decrement5 = () => {
        for (let i = 0; i < 5; i++) {
            setCount((prevCount) => prevCount - 1)
        }
    }

    return (
        <div>
            <h2>Function Count : {count}</h2>
            <button onClick={() => setCount(initialState)}>Reset</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>Incrememt</button>
            <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
            <button onClick={increment5}>Incrememt by 5</button>
            <button onClick={decrement5}>Decrement by 5</button>
        </div>
    )
}

export default HookCounter2

/*
    NOTE - Whenever we want to change the value based on previous value, always pass a function in the setState method, which will have access to the previous state value and change the new value based on the previous value.
*/
