import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./NewTaskButton.css";

export function NewTaskButton() {
  const { setOpenModal } = useContext(TodoContext);
  const handleClick = (e) => {
    e.target.classList.toggle("new-task-btn__icon--rotate")
    setOpenModal((prev) => !prev)
}
  return (
    <button className="new-task-btn" type="button" onClick={handleClick}>
      <span className="new-task-btn__icon"></span>
    </button>
  )
}
