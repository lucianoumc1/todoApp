import "./NewTask.css"
import coverImage from "../images/task-image.png";
import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

export function NewTask() {
  const [ newTaskName, setNewTaskName ] = React.useState("")
  const { todos, setTodo } = useContext(TodoContext);

  const changeNewTaskName = (ev) => {
    const taskNameLowerCase = ev.target.value.toLowerCase()
    setNewTaskName(taskNameLowerCase)
  }

  const saveNewTaskName = (e) => {
    e.preventDefault()
    const newTask = { tarea: newTaskName, completed: false }
    let newTodoList = [...todos ]
    newTodoList.push(newTask)
    setTodo(newTodoList)
    setNewTaskName("")
  }

  return(
    <div className="new-task__container">
        <form className="new-task__form" onSubmit={saveNewTaskName}>
          <h2>Create a new task</h2>
          <p>Task name</p>
          <input
            value={ newTaskName }
            onChange={ changeNewTaskName }  
          />
          <button type="submit" >
            Create
          </button>
        </form>
        <img className="new-task__cover" src={coverImage} alt="create-task"/>
      </div>
  )
}