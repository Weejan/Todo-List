import styles from "./counter.module.css";
export default function Counter({ todos }) {
  return (
    <div className={styles.counter}>
      <h2>Task Completed:{todos.filter((todo) => todo.done).length}</h2>
      <h2>Task Left:{todos.filter((todo) => todo.done === false).length}</h2>
    </div>
  );
}
