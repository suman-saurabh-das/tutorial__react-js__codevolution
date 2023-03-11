import React from 'react'
import { Component } from 'react'
// import { PureComponent } from 'react'

// import PureComp from './E26_PureComp'
// import RegularComp from './E26_RegularComp'
import MemoComp from './E27_MemoComp'

class ParentComp extends Component {
// class ParentComp extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      name: "Saurabh"
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Saurabh" })
    }, 2000)
  }

  render() {
    console.log("Parent component rendered");
    return (
      <div>
        Parent Component
        {/* <PureComp name={this.state.name} />
        <RegularComp name={this.state.name} /> */}
        
        <MemoComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp

/*
    If the parent component does not re-render, its child components will also not re-render.
*/
