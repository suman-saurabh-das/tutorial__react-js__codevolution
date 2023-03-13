import React, { useState } from 'react'
// import ClassMouse from './E9_ClassMouse'
import HookMouse from './E9_HookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(false)

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {/* {display && <ClassMouse />} */}
            {display && <HookMouse />}
        </div>
    )
}

export default MouseContainer

/*
    Initially, we have not removed the mouse move event listener from the MouseHook component when it is unmounted, so the event listener is still listening to mouse move event even though the component has been removed from DOM (hidden)

    To prevent this, we should clean up the mouse move event listener. (cancel all subscriptions and listeners)

    In case of class components, we can do it inside the componentWillUnmount() lifecycle method
        componentWillUnmount() {
            // We are removing the listener once the component is unmounted
            window.removeEventListener('mousemove', this.logMousePosition)
        }

    In case of functional components, the function that is passed into the useEffect() can return a function that will be executed when the component will unmount.
        useEffect(() => {
        console.log("useEffect called");
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log("Component unmounting code");
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])
*/
