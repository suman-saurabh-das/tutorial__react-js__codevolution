import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log("Button clicked from functional component");
    }

    // const clickHandler = () => {
    //     console.log("Button clicked from functional component");
    // }
    return (
        <div>
            <button onClick={clickHandler}>Function Click</button>
        </div>
    )
}

export default FunctionClick

/*
    React events are named in camelCase instead of lowercase.
        e.g. onclick will become onClick
    In JSX, we will pass a function as an event handler rather than a string.
        e.g. "clickHandler()" will become {clickHandler}
    NOTE - We need to pass the function definition and not the function call.
        i.e. we should not use the parenthesis after the functionName.
    NOTE - event handler is a function and not a function call.
*/
