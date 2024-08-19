import style from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  return (
    <>
      <div>
        <div className={style.item} id={item}>
          {item}
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
