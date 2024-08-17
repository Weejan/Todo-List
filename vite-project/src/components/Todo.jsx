import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [task, taskAdd] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, task]);
    taskAdd("");
  }
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => {
            taskAdd(e.target.value);
          }}
          value={task}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
