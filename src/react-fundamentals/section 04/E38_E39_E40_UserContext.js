import React from "react";

const UserContext = React.createContext("Suman")

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext


/*
    Step 1 - Creating the user context -
    We will use the createContext method from react to create the UserContext.
    Every object created using the createContext method comes with a provider and consumer react component.

    Step 2 - Provide this context using the UserProvider component.
    The place we provide this UserProvider component is important as only the descendent components can consume it.
    We will wrap ComponentC with UserProvider in App.js
    The provider component is responsible for providing a value for all the descendent components.
    The value that we want to provide is username, now this value can be consumed by componentC and any nested component.
    We provide the value using the value attribute in the provider (just like passing props)

    Step 3 - Consume the value in the desired component
    To consume a context value, we need the UserConsumer component.
    We will wrap the ComponentF by the UserConsumer component
    Between the opening and closing tags of UserConsumer, we need to specify an arrow function
    The function gets the userContext value as its parameter which can then be used within the function body to return a react element. (Here we are passing a function as a child to consumer component).

    We can set a default value to the context, it is set while creating the context.
    It is passed as an argument to the createContext() method.
    This default value will be used when a component does not have a matching provider in the component tree.

    Context type property - Earlier, we used UserConsumer component to consume the component value, we can also do it via using context type property on a class.
    Step 1. export default UserContext.
    Step 2. assign this UserContext to the contextType property on the class.
    Step 3. in the render method, the UserContext value is available as this.context

    Limitations of contextType
    1. It only works with class components
    2. We can subscribe to only a single context using context type
*/
