import React, { useState, useEffect } from 'react'

function HookCounter5() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default HookCounter5

/*
    Just like useState, useEffect is also a function.
    useEffect accepts a parameter, which is a function that gets executed after every render of the component.

    When we specify useEffect, we are basically requesting react to execute the function that is passed as an argument every time the component renders. i.e. useEffect runs after every render.

    useEffect is placed inside the component by doing this, we can easily access the components state and props without having to write any additional code.
*/
