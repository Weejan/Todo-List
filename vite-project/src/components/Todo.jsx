import Form from "./Form";
import { useState } from "react";
import TodoList from "./TodoList";
import styles from "./todo.module.css";
import Counter from "./Counter";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <div className={styles.listContainer}>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Counter todos={todos} />
    </div>
  );
}
