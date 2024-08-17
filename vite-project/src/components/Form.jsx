import { useState } from "react";
export default function Form({ todos, setTodos }) {
  const [task, taskAdd] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, task]);
    taskAdd("");
  }
  return (
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
  );
}
