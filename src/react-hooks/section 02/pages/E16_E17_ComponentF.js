import React from 'react'
import { UserContext, WorkContext } from '../E16_E17_DataPassingUsingContext'

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (<WorkContext.Consumer>
                            {
                                work => {
                                    return <h3>User context value is : {user} & Work context value is : {work}</h3>
                                }
                            }
                        </WorkContext.Consumer>)
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF

/*
    Steps to pass data from App.js component to FunctionalComponentF.js

    1. Create a context using React.createContext()
        (Create it in the parent component from which you want to pass the data to the child component)
    2. Provide this context a value using ContextName.Provider and passing in a value attribute.
        (Provider must wrap the children components for the value to be available)
    3. Consume the context value using ContextName.Consumer and inside it creating a function to use the passed value.
        (We will have to make use of the render props pattern to get hold of the value passed by the context)

    The value being passed by the provider is being used by the consumer in the required component using the render props pattern.

    Disadvantages of this mehtod to pass props
        The code is difficult to understand.
        It is difficult to pass multiple props.
*/
