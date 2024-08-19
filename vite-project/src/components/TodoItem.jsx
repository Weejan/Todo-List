import style from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleComplete(item) {
    setTodos(
      todos.map((todo) =>
        todo === item ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  const slice = item.done ? style.slice : "";
  return (
    <>
      <div>
        <div className={style.item}>
          <span
            className={slice}
            onClick={() => {
              handleComplete(item);
            }}
          >
            {item.name}
          </span>
          <span>
            <button
              onClick={() => {
                handleDelete(item);
              }}
              className={style.button}
            >
              X
            </button>
          </span>
        </div>
        <hr className={style.line} />
      </div>
    </>
  );
}
