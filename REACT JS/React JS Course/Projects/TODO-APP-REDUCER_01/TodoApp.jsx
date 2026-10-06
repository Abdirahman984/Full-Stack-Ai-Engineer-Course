import React, { useReducer, useState } from 'react'

const TodoApp = () => {
    const initialState = ([
      
    ])

    const reducer = (state, action) => {
        switch (action.type) {
            case 'add':
                return [...state, action.payload]
            case 'toggle':
                return state.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
            case 'delete':
                return state.filter((todo) => todo.id !== action.payload)
            default:
                return state
        }

    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const [task, setTask] = useState("")

    const handleAdd = () => {
        if (task.trim()) {
            const newTodo = {
                id: Date.now(),
                task,
                completed: false,
            }

            dispatch({
                type: 'add',
                payload: newTodo,
            })

            setTask('')
        }
    }


    return (
        <div>
            <h2>todo app </h2>
            <input type="text" placeholder='add task you want to do' onChange={(e) => setTask(e.target.value)} value={task} />
            <button onClick={handleAdd}>add task</button>
            <ul>
                {
                    state.map(todo => (
                        <li key={todo.id}>
                            <span onClick={() => dispatch({ type: 'toggle', payload : todo.id})} style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.task}</span>
                            <button onClick={() => dispatch({ type: 'delete', payload : todo.id})}>delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoApp;