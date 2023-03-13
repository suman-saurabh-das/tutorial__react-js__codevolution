import React, { useReducer } from 'react'

const initialState = {
    firstCount: 0,
    secondCount: 10
}

const reducer = (state, action) => {
    switch (action.type) {
        case "increment1": return { ...state, firstCount: state.firstCount + action.payload }
        case "decrement1": return { ...state, firstCount: state.firstCount - action.payload }
        case "increment2": return { ...state, secondCount: state.secondCount + action.payload }
        case "decrement2": return { ...state, secondCount: state.secondCount - action.payload }
        case "reset": return initialState
        default: return state
    }
}

function Counter2() {
    const [counter, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h2>First Counter : {counter.firstCount}</h2>
            <div>
                <button onClick={() => dispatch({ type: "increment1", payload: 1 })}>Increment</button>
                <button onClick={() => dispatch({ type: "decrement1", payload: 1 })}>Decrement</button>
                <button onClick={() => dispatch({ type: "increment1", payload: 5 })}>Increment by 5</button>
                <button onClick={() => dispatch({ type: "decrement1", payload: 5 })}>Decrement by 5</button>
            </div>
            <h2>Second Counter : {counter.secondCount}</h2>
            <div>
                <button onClick={() => dispatch({ type: "increment2", payload: 10 })}>Increment Counter 2</button>
                <button onClick={() => dispatch({ type: "decrement2", payload: 10 })}>Decrement Counter 2</button>
            </div><br />
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    )
}

export default Counter2

/*
    We can also pass an object as a state and action to the reducer function.
    e.g.
        In this case the state is an object containing 2 state variables namely firstCounter and secondCounter. Using an state as an object enables us to maintain multiple states in a single useReducer hook.
        Also the action is an object which enables us to specify different values by which we can increment or decrement the state based on values passed to the action object. Using an action as an object enables us to pass additional data to reducer function.

        NOTE - This approach of maintaining variables in a single state object is suited to maintain Global state but for local state we have another method.

        NOTE - When we are having multiple properties in the state object but we are changing only one at a time, then we will have to use the spread operator so that we retain the inital state of both objects and then overwrite the required one. (i.e. we will have to use spread operator to merge the state properties to get the desired output.)
*/
