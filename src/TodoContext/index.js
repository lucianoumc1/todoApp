import React from "react";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

const TodoProvider = (props) => {

  const { item:todos, saveLocalStorage: setTodo} = useLocalStorage("TODOLIST_V1", [])
  const [ searchValue, setSearchValue ] = useState("");
  const [ hideValue, setHideValue ] = useState(false);

  let filterTodos = [];
  searchValue.length
    ?filterTodos = todos.filter( todo => (todo.tarea.toLowerCase().includes(searchValue)))
    :filterTodos = todos;
  hideValue
    ?filterTodos = filterTodos.filter( todo => !todo.completed)
    :filterTodos = filterTodos
  
  const onDeleteTodo = (id) => {
    let result = todos.filter((el) => el.tarea !== id);
    setTodo(result);
  }
  
  // optimizar funcion
  const onCompleteTodo = (id) => {
    let result = todos.map((el) => {
      if (el.tarea !== id) {
        return el;
      } else {
        if (el.completed) {
          return { tarea: el.tarea, completed: false }
        }else{
          return { tarea: el.tarea, completed: true }
        }
      }
    })
    setTodo(result);
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
      setHideValue
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };
