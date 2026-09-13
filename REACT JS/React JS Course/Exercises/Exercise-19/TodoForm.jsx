import { useState } from 'react'
import { useContext } from 'react'
import TodoContext from './TodoContext'

import style from '../Exercise-19/Todo.module.css'
import { TodoList } from './TodoList'


export const TodoForm = () => {

    const [tasks, setTask] = useState("")

    const { dispatch } = useContext(TodoContext)
    const { state } = useContext(TodoContext)
    

    const handleAddTask = () => {
        if (tasks.trim()) {
            const newTodos = {
                id: Date.now(),
                tasks,
                completed: false
            }
            dispatch({ type: 'add', payload: newTodos })
            setTask("")
        }

    }
    return (
        <div className={style.container}>
            <h2 className={style.title}>my todo list</h2>
            <input className={style.inputForm} type="text" placeholder="add your todo list here ?" onChange={(e) => setTask(e.target.value)} value={tasks} />
            <button className={style.btn1} onClick={handleAddTask}>add task</button>
            <TodoList />

        </div>

    )
}

