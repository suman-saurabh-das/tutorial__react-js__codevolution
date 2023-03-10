import React, {Component} from "react";

class WelcomeProps extends Component {
    render() {
        return (
            <div>
                <h2>Hi {this.props.name} a.k.a {this.props.heroName}</h2>
                {this.props.children}
            </div>
        )
    }
}

export default WelcomeProps

/*
    In case of class components, we do not need to pass the props as an argument to the class.
    It is readily available using the this keyword and we can access them as this.props.
*/
