import React from 'react'

const TodoList = (props) => {
    
  return (
    <>
           <div className="items">
            <li className="list-item">{props.text}</li>
        <button className="del" onClick={()=>{
            props.onSelect(props.id);
        }}>del</button> 
        </div>
    </>
  )
}

export default TodoList