import "./TodoHide.css"
import hideIcon from "../images/hide-icon.png"
import viewIcon from "../images/view-icon.png"
import { useContext } from "react";
import { TodoContext } from "../TodoContext";

export function TodoHide() {
  const { hideValue, setHideValue } = useContext(TodoContext);

  const onToggleHideCompleted = () => {
    hideValue ? setHideValue(false) : setHideValue(true);
  };

  return (
    <div className="hide-completed__container" onClick={onToggleHideCompleted}>
    	<img className="hide-complete__icon" src={hideValue?viewIcon:hideIcon} />
      <p>{hideValue?"View Completed":"Hide Completed"}</p>
    </div>
  );
}
