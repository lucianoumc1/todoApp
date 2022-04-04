import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../TodoContext";
import { TodoHide } from "../TodoHide";
import "./TaskDetail.css";

export function TaskDetail({ tittle }) {
  const [ descriptionValue, setDescriptionValue ] = useState("")
  const { todos } = useContext(TodoContext);

  const onChangeDescription = (ev) => {
    setDescriptionValue( ev.target.value)
  } 

  const onSubmitTaskDescription = () => {
    
  }

  return(
    <form className="task-detail__container" onSubmit={onSubmitTaskDescription}>
      
      <h4>{tittle}</h4>
      <label>Description</label>
      <textarea value={descriptionValue} onChange={onChangeDescription}/>
      { descriptionValue && (
        <div className="buttons__container" id="buttonsContainer" >
          <button type="button" onClick={() => setDescriptionValue("")}>Cancelar</button>
          <button type="submit">Agregar</button>
        </div>
      )}
    </form>
  )
}
