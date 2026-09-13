import { useContext } from 'react'
import TodoContext from './TodoContext'
import { TodoItem } from './TodoItem'

import style from '../Exercise-19/Todo.module.css'

export const TodoList = () => {
    const {state} = useContext(TodoContext)

  return (

    <ul className={style.ulConatiner}>
        {
            state.map((todo) => (
                <TodoItem key={todo.id} todo = {todo}/>
            ))
        }
    </ul>
    
 
  )
}
