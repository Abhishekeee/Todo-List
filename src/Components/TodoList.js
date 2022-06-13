import React, { useState } from "react";
import ListItem from "./ListItem";
import "./TodoList.css";
export default function TodoList() {
  // INPUT OPERATION
  const [input, setInput] = useState("");
  const inputText = (e) => setInput(e.target.value);
  // LIST OPERATION
  const [item, setItem] = useState([]);

  const list = (e) => {
    e.preventDefault();
    setItem((e) => {
      const List = [...e, input].filter((x) => x !== "");
      return List;
    });
    setInput("");
  };

  const deleteItems = (id) => {
    console.log('deleted ',id);
    setItem((e) => {
      return e.filter(x => e.indexOf(x) !== id);
    });
  };

  return (
    <div className="container my-5 main pb-4">
      <div className="row mt-1 mb-1">
        <h5 className="fs-2 py-1 lead fw-bold shadow background text-center text-white my-3">
          ToDo List
        </h5>
      </div>
      <div className="row text-center">
        <form onSubmit={list}>
          <input
            type="text"
            className="text-center fs-5 py-2 px-3 input"
            placeholder="Add a Item"
            onChange={inputText}
            value={input}
          />
          <i className="bi bi-plus-circle-fill color ms-1" onClick={list}></i>
        </form>
        <ul className="list-unstyled my-4 d-flex flex-column text-start">
          {item.map((e, index) => {
            return <ListItem items={e} key={index} id={index} onSelect={deleteItems} />;
          })}
        </ul>
      </div>
    </div>
  );
}
