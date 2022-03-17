import "./TodoCount.css";

export function TodoCount(props) {
  let total = props.list.length;
  let completed = props.list.filter((el) => el.completed).length;

  return (
    <h3 className="todo__tittle">
      Completed: {completed} to {total}
    </h3>
  );
}
