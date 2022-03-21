import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCount.css";

export function TodoCount(props) {

  const { todos } = useContext(TodoContext);

  let total = todos.length;
  let completed = todos.filter((el) => el.completed).length;

  return (
    <h3 className="todo__tittle">
      Completed: {completed} to {total}
    </h3>
  );
}
