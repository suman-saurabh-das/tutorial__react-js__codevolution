import React from "react";

/* Creating a react component using JSX */
// const Hello = () => {
//     return (
//         <div id="dummyId" className="dummyClass">
//             <h2>Hello Saurabh</h2>
//         </div>
//     )
// }

/* Creating a react component without using JSX */
const Hello = () => {
    return (
        React.createElement(
            "div",
            { id: "dummyId", className: "dummyClass" },
            React.createElement("h2", null, "Hello Saurabh")
        )
    )
}

export default Hello

/*  
    We will use the React.createElement("param1", "param2", "param3"); method,
    which accepts minimum 3 parametres -
    1. tag name
    2. attributes & properties (optional properties to be passed as an object)
    3. children for the tag name -> element node / text node / comment node

    Why do we import React from "react" ?
    Even though it seems that we are not using it anywhere, it is used for transpilation of the JSX code into JS code which uses React.createElement() internally which uses the React library.
*/

/*
    From React 16.7.0 alpha onwards, we have hooks, which lets us use state and other react features without writing a class. So technically, functional components are no longer stateless.
*/