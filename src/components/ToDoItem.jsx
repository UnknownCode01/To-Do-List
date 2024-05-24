import React, { useState } from "react";

function TodoItem(props) {
  const [isDone, setIsDone] = useState(false);
  function handleClick() {
    setIsDone(!isDone);
  }
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : null }}>
        {props.text}
      </li>
      ;
    </div>
  );
}
export default TodoItem;
