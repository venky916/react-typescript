import React, { useEffect, useRef, useState } from 'react'
// import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DoneIcon from '@mui/icons-material/Done';
import { Todo } from '../model';
import { Draggable } from 'react-beautiful-dnd';

type Props = {
  index:number,
  todo: Todo,
  todos: Todo[],
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo: React.FC<Props> = ({index, todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id:number) => {
      setTodos(todos.map((todo)=>todo.id === id ? {...todo,isDone : !todo.isDone} : todo))
  }
  
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo)=> todo.id !==id ))
  }


  const handleSubmit = (e:React.FormEvent,id:number) => {
    e.preventDefault();
    setTodos(todos.map((todo) => (
      todo.id === id ? {...todo,todo:editTodo} :todo
    )))
    setEdit(false);
  }

  useEffect(() => {
    inputRef.current?.focus();
  },[edit])

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {
        (provided) => (
          <form className='todos__single' onSubmit={(e)=>handleSubmit(e,todo.id)}  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
      {
        edit ? (
          <input ref={inputRef} value={editTodo} onChange={(e)=>setEditTodo(e.target.value)}  className='todos__single--text'/>
        
        ): (
        todo.isDone ? (
          <s className='todos__single--text'>{todo.todo}</s>
        ): (
            
          <span className='todos__single--text'>{todo.todo}</span>
        )
      
        )
      }
      
      <div>
        <span className='icon' onClick={() => {
          if(!edit && !todo.isDone){
           setEdit(!edit)
          }
        } }>
          <BorderColorIcon />
        </span>
        <span className='icon' onClick={()=>handleDelete(todo.id)}>
          <DeleteIcon />
        </span>
        <span className='icon' onClick={()=>handleDone(todo.id)}>
          <DoneIcon />
        </span>
      </div>
      </form>
        )
      }
    
    </Draggable>
  )
}

export default SingleTodo