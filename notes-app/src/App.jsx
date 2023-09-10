import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
const App = () => {
  const [InputList, setInputList] = useState("");
  const [item, setItem] = useState([]);
  const  itemEvent = (e)=>{
      setInputList(e.target.value)
  }
  const listOfItem = () => {
         setItem ((oldItem)=>{
            return [...oldItem, InputList];
          })
          setInputList(" ");
  };
  const delItem= (id) =>{
     setItem((oldItem)=>{
       return oldItem.filter((arr,index)=>{
         return  index !== id;
      })
     })          
  }
  return (
    <>
      <div className="main-container">
        <div className="center-container">
          <h1 className="app-heading">TODO LIST</h1>
          <br />
          <input
            type="text"
            className="input-box-todo"
            onChange={itemEvent}
            value={ InputList}
            placeholder="add a items"
          />

          <button className="add-btn" onClick={listOfItem}>
            +
          </button>
          <ul className="list-container">
            {  item.map((itemval,i)=>{
                 return  <TodoList key = {i} id = {i} onSelect={delItem} text = {itemval} />
            }) }
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
