import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [xPos, setXPos] = useState(0)
    const [yPos, setYPos] = useState(0)

    useEffect(() => {
        console.log("useEffect called");
        window.addEventListener("mousemove", logMousePosition)

        return () => {
            window.removeEventListener("mousemove", logMousePosition)
        }
    }, [])

    const logMousePosition = (event) => {
        console.log("Mouse move");
        setXPos(event.clientX)
        setYPos(event.clientY)
    }

  return (
    <div>
      <h2>X-pos: {xPos} Y-pos: {yPos}</h2>
    </div>
  )
}

export default HookMouse

/*
    In useEffect() hook, when we want to achieve the effect (function) to run only once and not to depend on anything, we can achieve that by specifying an empty array as the 2nd parameter to the useEffect.

    We are basically telling react that this effect doesn't depend on any particular props or state.
*/
