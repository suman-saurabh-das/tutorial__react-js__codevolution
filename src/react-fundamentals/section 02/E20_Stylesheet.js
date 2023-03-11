import React from 'react'
import './E20_myStyles.css'

function Stylesheet(props) {
  const setTextColor = props.primary ? "primary" : ""
  return (
    <div>
      <h2 className={`${setTextColor} font-xl`}>Stylesheet</h2>
    </div>
  )
}

export default Stylesheet

/*
    We can add a class name and modify the stylings of the HTML tags.
    We can also conditionally add a class based on the props or state of the component.
    To add multiple classes, best way is to used template literals.
*/
