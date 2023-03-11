import React from 'react'

// function ForwardRefInput() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   )
// }

const ForwardRefInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
})

export default ForwardRefInput

/*
    We will be using arrow function instead of regular function.
    To forward a ref, we will use React.forwardRef() method, this method takes in a component as its first parameter.
    Here we have passed the arrow function as a parameter to the forwardRef() method.
    Now the functional component receives props as 1st parameter and ref as 2nd parameter since we are using forwardRef()
*/
