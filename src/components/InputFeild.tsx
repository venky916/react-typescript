import React, { useRef } from 'react'
import './styles.css'

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    
    const inputRef = useRef<HTMLInputElement>(null);

  return (
      <form className='input' onSubmit={(e) => {
          handleAdd(e)
          inputRef.current?.blur();
      }}>
          <input ref={ inputRef} type='text' placeholder='Enter a task' className='input__box' value={todo} onChange={(event)=>setTodo(event.target.value)}/>
          <button className='input_submit' type='submit'>Go</button>
      </form>
  )
}

export default InputFeild