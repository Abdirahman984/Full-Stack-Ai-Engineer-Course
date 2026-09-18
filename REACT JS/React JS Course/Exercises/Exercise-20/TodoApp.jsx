import { useReducer, useState } from "react"

const initialState = []

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload]
        case 'TOGGLE':
            return state.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
        case 'DELETE':
            return state.filter((todo) => todo.id != action.payload)
        default:
            return state
    }
}


const TodoApp = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const [text, setText] = useState('')


    const handleChange = () => {
        if (text.trim() !== '') {
            const newTodo = {
                id: crypto.randomUUID(),
                text,
                completed: false
            }

            dispatch({
                type: 'ADD',
                payload: newTodo
            })

            setText('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    console.log(state)

    return (
        <div className='min-h-screen bg-linear-to-br from-purple-20 to-rose-100 capitalize'>
            <div className="mx-auto text-center">
                <div className="flex justify-center items-center gap-8 px-4 py-4 bg-white shadow-sm">
                    <h2 className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg text-lg">Todo App</h2>
                    <h2 className="text-lg px-4 py-2 rounded-lg">study timer</h2>
                </div>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden px-12 py-6 m-6">
                    <h1 className="text-2xl text-gray-800 font-bold mb-2">my todo list</h1>
                    <form onSubmit={handleSubmit} className="flex gap-8 justify-center items-center px-8 py-4">
                        <input onChange={(e) => setText(e.target.value)} value={text} className="px-15 py-4 bg-white text-gray-500 rounded-lg border-solid border-gray-100 shadow-lg outline-none capitalize" type="text" placeholder='add tasks you want do ?' />
                        <button onClick={handleChange} className="bg-purple-600 text-white px-8 py-2 rounded-md capitalize border-none outline-none">add</button>
                    </form>

                    <div>
                        <ul  className="text-left ">
                            {
                                state.map((todo) => (
                                    <div className="">
                                        <li key={todo.id} className=" bg-gray-50 shadow-lg px-2 py-3 border-lg flex items-center m-2 ">
                                            <input className="w-5 h-5 border-gray-300 text-purple-600 rounded" type="checkbox" checked = {todo.completed} onChange={() => dispatch ({type : 'TOGGLE', payload: todo.id})}/>
                                            <span className={`flex-1 ml-4 ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`} onClick={() => dispatch({ type: 'TOGGLE', payload: todo.id })}>{todo.text}</span>
                                            <button className="ml-10 text-red-600 capitalize" onClick={() => dispatch({ type: 'DELETE', payload: todo.id })}>delete</button>
                                        </li>
                                    </div>

                                ))
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoApp