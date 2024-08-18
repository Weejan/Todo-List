import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [task, taskAdd] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, task]);
    taskAdd("");
  }
  return (
    <form className={styles.todoform}>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => {
          taskAdd(e.target.value);
        }}
        value={task}
        placeholder="Enter Todo item..."
      />
      <button
        className={styles.button}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Add
      </button>
    </form>
  );
}
