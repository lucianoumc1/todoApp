import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

const TodoProvider = (props) => {
  const { item: todos,
          saveLocalStorage: setTodo, 
          chargeState
        } = useLocalStorage("TODOLIST_V1", [])

  const [ searchValue, setSearchValue ] = useState("");
  const [ hideValue, setHideValue ] = useState(false);
  const [ openModal, setOpenModal ] = useState(false);
  const [ newTask, setNewTask ] = useState("");


    let filterTodos = [];
    searchValue.length
      ?filterTodos = todos.filter( todo => (todo.tarea.toLowerCase().includes(searchValue)))
      :filterTodos = todos;
    hideValue
      ?filterTodos = filterTodos.filter( todo => !todo.completed)
      :filterTodos = filterTodos
  
  const onDeleteTodo = (id) => {
    let newTodoList = todos.filter((el) => el.tarea !== id);
    setTodo(newTodoList);
  }
  
  const onCompleteTodo = (id) => {
    let newTodoList = todos.map((el) => {
      if (el.tarea !== id) {
        return el;
      } else {
        return { tarea: el.tarea, completed: el.completed? false: true }
      }
    })
    setTodo(newTodoList);

  }
  return(
    <TodoContext.Provider value={{
      todos,
      setTodo,
      onDeleteTodo,
      onCompleteTodo,
      filterTodos,
      searchValue,
      setSearchValue,
      hideValue,
      setHideValue,
      chargeState,
      openModal,
      setOpenModal,
      newTask, 
      setNewTask
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}
export { TodoContext, TodoProvider };
