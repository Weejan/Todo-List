import style from "./todoitem.module.css";

export default function TodoItem({ item }) {
  return (
    <>
      <div>
        <div className={style.item}>{item}</div>
        <hr className={style.line} />
      </div>
    </>
  );
}
