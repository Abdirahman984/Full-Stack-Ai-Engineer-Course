import { useReducer, useState } from "react"

const ToDoApp = () => {

    // 1. TODO REDUCER 
    const [tasks, setTask] = useState("")
    const initialState = []

    const reducer = (state, action) => {
        switch (action.type) {
            case 'add':
                return [...state, action.payload]
            case 'toggle':
                return state.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
            case 'delet':
                return state.filter((todo) => todo.id !== action.payload)
            default:
                return state;
        }

    }

    const [state, dispatch] = useReducer(reducer, initialState)


// 2. TODO FORM
    const handleAddTask = () => {
        if (tasks.trim()) {
            const newTodos = {
                id: Date.now(),
                tasks: tasks,
                completed: false
            }
            dispatch({ type: 'add', payload: newTodos })
            setTask("")
        }

    }

    return (
        <div>
            <h2>simple Todo app </h2>
            <input type="text" placeholder="add todo list" onChange={(e) => setTask(e.target.value)} value={tasks} />
            <button onClick={handleAddTask}>add task</button>
            {/* TODO LIST */}
            <ul>

                {
                    state.map((todo) => (
                        <li key={todo.id}>
                            <span
                                style={{
                                    textDecoration: todo.completed ? 'line-through' : 'none',
                                    color: todo.completed ? 'green' : 'inherit'
                                }}
                                onClick={() => dispatch({ type: 'toggle', payload: todo.id })}>{todo.tasks}</span>
                            <button onClick={() => dispatch({ type: 'delet', payload: todo.id })}>delet</button>


                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default ToDoApp;