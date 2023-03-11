import React from 'react'

function MemoComp({ name }) {
    console.log("Memo component rendered");
    return (
        <div>
            Memo Component - {name}
        </div>
    )
}

export default React.memo(MemoComp)

/*
    Memo component is similar to pure component but it is for functional components
    To make a functional component a memo component, while exporting we need to use React.memo() method and pass component name as an argument -> React.memo(MemoComp)

    React.memo() is a higher order component. i.e. it accepts a component, adds some things to that component and returns an enhanced component.
*/
