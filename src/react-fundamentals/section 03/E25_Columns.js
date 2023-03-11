import React from 'react'

function Columns() {
    const items = [{ id: 1, title: "title1" }, { id: 2, title: "title2" }]
    return (
        <>
            <td>Name</td>
            <td>Saurabh</td>
            {
                items.map(item => {
                    return <React.Fragment key={item.id}>
                        <td>{item.title}</td>
                    </React.Fragment>
                })
            }
        </>
    )
}

export default Columns

/*
    In this component, if we use a <div> tag to enclose the <td> element, we will get an error
    Instead we can make use of the React.fragment, which will not affect the DOM tree.

    NOTE - Fragments can accept the key attribute when rendering list of items.
    <React.Fragment></React.Fragment> shorthand notation : <></>
    NOTE - If we use the shorthand notation, we cannot use the key attribute.
*/
