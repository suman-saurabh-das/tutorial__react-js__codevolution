import React from 'react'

// function Person({person}) {
function Person({ person, key }) {
    return (
        <div>
            {key}
            <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>
        </div>
    )
}

export default Person

/*
    The Person component is only responsible for rendering the data which it gets from the parent.
*/
