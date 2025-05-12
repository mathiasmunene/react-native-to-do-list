import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
      setTodos([...todos, {id: uuidv4(), tals: todo,
        completed: false, isEditing: false        
      }])
      console.log(todos)
    }
  return (
    <div className='ToDoWrapper'>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}
