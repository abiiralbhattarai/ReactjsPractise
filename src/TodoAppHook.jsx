import React, { useState } from "react";

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
  const[items, setItems] = useState([]);
  const[text, setText] = useState("");
  return (
    <div>
      <Toggle />
      <h3>TODO</h3>
      <div>
      <ul>
      <li>
      {}
      
      </li>
      </ul>
      </div>
    </div>
  );
}
export default TodoAppHook;
