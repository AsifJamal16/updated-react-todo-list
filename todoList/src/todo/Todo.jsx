import React, { useState } from 'react'
import './todo.css'
const Todo = () => {
  const [todo,setTodo]=useState('');
  const [todoList,setTodoList]=useState([]);
  function handlerChange(e){
    setTodo(e.target.value);
  }
  function addButtonHandler(e){
    e.preventDefault();
    if(!todoList.includes(todo)){
    setTodoList([...todoList,todo])
    setTodo('');
    }
    else{
      alert(`${todo} is already in the list`)
    }
  }
  function deleteHandler(index){
    let updatedList=[...todoList];
    updatedList.splice(index,1);
    setTodoList(updatedList);
  }
  return (
    <>
      <div className="Container">
        <h2>Todo List</h2>
        <input type="text" placeholder='Enter todo...' name='todo' value={todo} onChange={handlerChange}/>
        <button onClick={addButtonHandler} className='add'>Add</button>
        <ul>
        {
          todoList.map((ele,index)=>{
            return <div className='todoInputsListButton'>
              <div className="liSection">
                <li key={index}>{ele} </li>
              </div>
              <span>
                <button onClick={()=>deleteHandler(index)}className='del'>Delete</button>
              </span>
            </div>
          })
        }
      </ul>
      </div>
    </>
  )
}
export default Todo
