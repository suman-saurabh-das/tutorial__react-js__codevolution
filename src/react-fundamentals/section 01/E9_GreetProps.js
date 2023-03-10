import React from "react";

const GreetProps = (props) => {
    // props.name = "Alex" // This throws an error - Cannot assign to read only property

    console.log(props);
    return (
        <div>
            <h2>Hello {props.name} a.k.a {props.heroName}</h2>
            {props.children}
        </div>
    )
}

export default GreetProps

/*
    We can use props to have unique data for the same component thus making it a reusable component.
    For using props, we need to pass them from the parent element and we can use it as a parameter in the function.
    NOTE - All props are bundled together as a single object.
    NOTE - Props are immutable (i.e. their value cannot be changed).

    props.children can be used to render the data which is passed inside the parent component as children.
    If nothing is passed, then it does not render anything.
*/
