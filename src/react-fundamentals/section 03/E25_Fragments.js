import React from 'react'

function Fragments() {
    return (
        <React.Fragment>
            <h3>Fragment Demo</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi assumenda repellat deserunt mollitia veritatis vitae eos hic alias suscipit accusamus perferendis veniam sapiente, modi ipsa id fuga distinctio? Qui, illum.</p>
        </React.Fragment>
    )
}

export default Fragments

/*
    JSX expressions must have a single parent element, i.e. we can return only a single element from a functional or class component. If we want to group together multiple components, we can do so via a react fragment, without affecting DOM.
*/
