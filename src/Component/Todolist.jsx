
import React, { useState } from "react";
import Todos from "./Todos";

const Todolist = () => {
   
  const [itemAdded, addItems] = useState([]);
  function addItem() {
    if (text === "") {
      alert("Please Enter Item Name");
      return;
    }
    addItems((oldItem) => {
      return [...oldItem, text];
    });
    setInput("");
  }

  const [text, setInput] = useState("");
  function inputItem(event) {
    let cap = event.target.value;
    let capt = cap.charAt(0).toUpperCase() + cap.slice(1);
    setInput(capt);
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      addItem();
    }
  }
  
  function deleteTodo(id) {
    addItems((prevItem)=>{
        return prevItem.filter((arrEle, index)=>{
            return index!==id;
        })
    })
  }



  return (
    <>
      <div className="flex-div">
        <h1 className="heading">Todo List</h1>
        <div className="headDiv">
          <input
            type="text"
            placeholder="Enter Item Name..."
            value={text}
            autoFocus
            onKeyPress={inputItem}
            onChange={inputItem}
          />
          <div className="additem" onClick={addItem}>
            <h1>+</h1>
          </div>
        </div>
        <h3 className="heading">Todo Items</h3>
        <div className="itemDiv">
          <ol>
            {itemAdded.map((itemval, index) => {
              return <Todos text={itemval} key={index} id={index} onSelect={deleteTodo} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Todolist;
