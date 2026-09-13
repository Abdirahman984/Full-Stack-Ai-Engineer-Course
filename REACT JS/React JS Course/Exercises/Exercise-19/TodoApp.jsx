import { useReducer } from 'react'
import TodoContext from './TodoContext'
import { reducer, initialState } from './TodoReducer'


// import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'

export const TodoApp = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            <div>
                <TodoForm />
            </div>

        </TodoContext.Provider>

    )
}

export default TodoApp;