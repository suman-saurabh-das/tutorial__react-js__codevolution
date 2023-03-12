import React, { Component } from 'react'
import ComponentE from './E38_E39_E40_ComponentE'

class ComponentC extends Component {
  render() {
    return (
      <div>
        <ComponentE />
      </div>
    )
  }
}

export default ComponentC

/*
    Our goal is to get data from the App.js component to the ComponentF using context
    
    Steps to implement context
    1. Create the context
    2. Provide a context value
    3. Consume the context value
*/
