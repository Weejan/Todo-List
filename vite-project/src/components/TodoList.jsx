import TodoItem from "./TodoItem.jsx";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.list}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.name}
            item={todo.name}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </div>
  );
}
