import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
  return ReactDOM.createPortal (
    <div>
      <h2>Portals Demo</h2>
    </div>,
    document.getElementById("portal-root")
  )
}

export default PortalDemo

/*
    Steps to render a component using Portal

    Step 1 - Add a DOM node that falls outside the root element. (In index.html file)
    Step 2 - Create the component that you want to insert into node other than root node.
    Step 3 - Use the ReactDOM.createPortal() method to insert the component into the portal-root node.

        import ReactDOM from 'react-dom'
        instead of returning JSX, we will return ReactDOM.createPortal(parameter1, parameter2)
        parameter1 - It is the JSX that we want to render (it can be any element that react can render numbers, strings, JSX or components).
        parameter2 - It is the DOM node to mount the element onto.

    Uses - To deal with parent component css, when the child component is a modal, pop-up or tool-tip.
    Codesandbox: https://codesandbox.io/s/00254q4n6p

    Event Bubling - Even though a portal can be anywhere inside the DOM tree, it behaves as a normal react child.
    An event fired from inside a portal will propagate to ancestors in the containing react tree, even if those elements are not ancestors in the DOM tree.
    Codepen: https://codepen.io/gaearon/pen/jGBWpE
*/
