import { useReducer } from "react"

const UserReducerWithCount = () => {
    const intialState = { count: 0 }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'INCREAMENT':
                return { ...state, count: state.count + 1 }
            case 'DEEREMENT':
                return { ...state, count: state.count - 1 }
            case 'RESET':
                return intialState
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, intialState)

    return (
        <div className="container p-10 bg-green-300">
            <h2>COUNT {state.count} </h2>
            <button  onClick={() => dispatch({ type: 'INCREAMENT' })}>increment</button>
            <button button onClick={() => dispatch({ type: 'DEEREMENT' })}>Decrement</button>
            <button button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    )
}

export default UserReducerWithCount;