import React from 'react'
import ComponentC from './pages/E16_E17_ComponentC'

export const UserContext = React.createContext()
export const WorkContext = React.createContext()

function DataPassingUsingContext() {

    return (
        <UserContext.Provider value={"Saurabh"}>
            <WorkContext.Provider value={"Engineer"}>
                <ComponentC />
            </WorkContext.Provider>
        </UserContext.Provider>
    )
}

export default DataPassingUsingContext
