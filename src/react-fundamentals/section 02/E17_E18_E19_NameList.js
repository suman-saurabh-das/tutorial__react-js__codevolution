import React from 'react'
// import Person from './E17_E18_Person'

function NameList() {
    // const names = ["Bruce", "Clark", "Diana"]
    // const nameList = names.map((name) => <h2>{name}</h2>)

    // return (
    //     <div>{nameList}</div>
    // )

    // const persons = [
    //     { id: 1, name: "Bruce", age: 30, skill: "React" },
    //     { id: 2, name: "Clark", age: 25, skill: "Angular" },
    //     { id: 3, name: "Diana", age: 28, skill: "Vue" },
    // ]
    // // const personList = persons.map(person => <Person person={person} />)
    // const personList = persons.map(person => <Person key={person.id} person={person} />)

    // return (
    //     <div>{personList}</div>
    // )

    const names = ["Bruce", "Clark", "Diana", "Bruce"]
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)

    return (
        <div>{nameList}</div>
    )
}

export default NameList

/*
    Rendering a simple array of items.
        Syntax : arrayName.map(Function)
        NOTE - map method returns a new array with each element modified based on the function.
        Here we will be using arrow function : (parameter) => return {functionBody}

        For returning single components with single parameter
        names.map(name => <h2>{name}</h2>)

        For returning multiple components with multiple parameters
        names.map((name) => {return (<h2>{name}</h2>)})

        We can simplify the return statement by moving out the list rendering logic nameListRender

    Rendering an array of object with multiple properties.
        For this the best practice is to create a component which is only responsible for displaying the data and sending the data as props from the parent component (separation of concerns).

    In console we get a warning saying that "Each child in a list should have a unique "key" prop"

    In simpler words, each item in the list rendered using map should have a prop called key and the value to that prop should be unique in the list
    NOTE - Key prop need not be an id always, it can be anything as long as it is unique.
    NOTE - Key props are not accessible in the child components. We will get this warning - "Person: `key` is not a prop. Trying to access it will result in `undefined` being returned."

    Importance of key -
    Keys help react identify which items in the list have changed, added or removed and plays a crucial role in handling UI updates efficiently.

        List (array) Index as key
    We can pass a second parameter to the map method after the elementValue, which will be the index of the element.
    We can now use this index as a key as it will always be an unique value.

    But using index can cause serious issues in UI.
    This example demonstrates the issue -> https://codepen.io/gopinav/pen/gQpepq

    When to use Index as a key
    1. The items in your list do not have an unique id.
    2. The list is a static list and will not change.
    3. The list will never be reordered or filtered.
*/
