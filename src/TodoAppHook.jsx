import React, { useState, useEffect } from "react";

function Toggle() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  return (
    <div>
      <button onClick={() => setIsToggleOn(!isToggleOn)}>
        {isToggleOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

function TodoAppHook() {
  const [items, setItems] = useState([
    {
      id: " 1",
      text: "Abiral",
    },
    {
      id: " 2",
      text: "Asim",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e, items, setItems, input, setInput) => {
    e.preventDefault();
    const newTodos = [...items, { id: Date.now(), text: input }];
    setItems(newTodos);
    setInput("");
  };

  const deleteItem = (index) => {
    const updateditems = items.filter((items) => items.id !== index);
    setItems(updateditems);
  };

  return (
    <div>
      <Toggle />
      <h3>TODO</h3>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.text}
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={(e) => handleSubmit(e, items, setItems, input, setInput)}>
        <label htmlFor="new-todo">What needs to be done?</label>
        <input
          id="new-todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoAppHook;
