import React, { useState } from 'react'

function HookCounter4() {
  const [items, setItems] = useState([])

  const addItems = () => {
    setItems([...items, {
      id: items.length,
      value: Math.ceil(Math.random() * 10),
    }])
  }

  return (
    <div>
      <button onClick={addItems}>Add item</button>
      <ul>
        {
          items.map(item => <li key={item.id}>{item.value}</li>)
        }
      </ul>
    </div>
  )
}

export default HookCounter4

/*
    To make use of useState hook, with arrays and objects
    First make a copy of the existing array/object with spread (...) operator
    Append a new item and pass it as an argument to the setState() method

    Summary -

    The useState hook lets you add state to functional components.
    In classes, the state is always an object.
    With useState hook, the state doesn't have to be an object
        (it can be a number, a string, a boolean, an object or an array).
    The useState hook returns an array with 2 elements.
    The first element is the current value of the state and the second element is a state setter function.
    If new state value depends on the previous state value, then you can pass a function to the setter function.
    When dealing with arrays/objects always make sure to spread your state variable and then call the setter function.
*/
