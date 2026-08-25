import { useReducer } from "react"

const CounterReducer = () => {
    const initialState = { couter_A: 0, couter_B: 0 }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'degresA':
                return {...state, couter_A: state.couter_A - 1 }
            case 'increaseA':
                return {...state, couter_A: state.couter_A + 1 }
            case 'degresB':
                return { ...state, couter_B: state.couter_B - 1 }
            case 'increaseB':
                return { ...state, couter_B: state.couter_B + 1 }
            case 'resetAll':
                return initialState
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h2>double counter simple Exercise</h2>
            <h2>counter A : {state.couter_A} </h2>
            <button onClick={() => dispatch({ type: 'degresA' })}>-A</button>
            <button onClick={() => dispatch({ type: 'increaseA' })}>+A</button>
            <h2>counter B : {state.couter_B} </h2>
            <button onClick={() => dispatch({ type: 'degresB' })}>-B</button>
            <button onClick={() => dispatch({ type: 'increaseB' })}>+B</button>
            <button onClick={() => dispatch({ type: 'resetAll' })}>reset Both</button>
        </div>
    )
}

export default CounterReducer;