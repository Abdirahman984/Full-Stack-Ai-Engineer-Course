import React, { useReducer } from 'react'

const CounterReducer = () => {
    const initialState = {
        counter_A: 0,
        counter_B: 0
    }

    const reducer = (state, action) => {
        console.log("state", state)
        console.log("action", action)
        switch (action.type) {
            case 'INCREAMENT-A':
                return { ...state, counter_A: state.counter_A + 1 }
            case 'DECREAMENT-A':
                return { ...state, counter_A: state.counter_A - 1 }
            case 'INCREAMENT-B':
                return { ...state, counter_B: state.counter_B + 1 }
            case 'DECREAMENT-B':
                return { ...state, counter_B: state.counter_B - 1 }
            case 'RESET-BOTH':
                return initialState
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <div>
            <h1>CounterReducer</h1>

            <h2> couter A : {state.counter_A}</h2>
            <button onClick={() => dispatch({ type: 'INCREAMENT-A' })}>  A+ </button>
            <button onClick={() => dispatch({ type: 'DECREAMENT-A' })}>  A- </button>

            <h2> couter B : {state.counter_B}</h2>
            <button onClick={() => dispatch({ type: 'INCREAMENT-B' })}> B+ </button>
            <button onClick={() => dispatch({ type: 'DECREAMENT-B' })}> B-  :</button> <br />


            <button onClick={() => dispatch({ type: 'RESET-BOTH' })}>RESET </button>


        </div>
    )
}

export default CounterReducer