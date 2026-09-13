import { useContext } from 'react'
import TodoContext from './TodoContext'

import style from '../Exercise-19/Todo.module.css'
// import { TodoList } from './TodoList'

export const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext)
  return (
    <li className={style.listContainer}>
      <input className={style.checkbox} type="checkbox" checked={todo.completed} onChange={() => dispatch({ type: 'toggle', payload: todo.id })} />
      <span className={style.span}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',

        }}
        onClick={() => dispatch({ type: 'toggle', payload: todo.id })}>{todo.tasks}</span>
      <button className={style.delete} onClick={() => dispatch({ type: 'delet', payload: todo.id })}>delete</button>
    </li>
  )

 
}


