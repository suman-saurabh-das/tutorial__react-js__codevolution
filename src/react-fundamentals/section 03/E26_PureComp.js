import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log("Pure component rendered");
    return (
      <div>
        Pure Comp - {this.props.name}
      </div>
    )
  }
}

export default PureComp

/*
    A pure component implements shouldComponentUpdate with a shallow prop and state comparison.
    SC of prevState/prevProps with currentState/currentProps -- is different (true) --> Re-render component.

    Shallow Comparision

    Primitive Types -
    a (SC) b returns true if a and b have the same value and are of the same type.
    e.g. string 'Saurabh' (SC) string 'Saurabh' returns true.

    Complex Types -
    a (SC) b returns true if a and b reference the exact same object.
*/
