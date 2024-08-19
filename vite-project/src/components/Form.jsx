import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  //const [task, taskAdd] = useState("");
  const [task, taskAdd] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, task]);
    taskAdd({ name: "", done: false });
  }
  return (
    <form className={styles.todoform}>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => {
          taskAdd({ name: e.target.value, done: false });
        }}
        value={task.name}
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
