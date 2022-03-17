import { useState } from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "./useLocalStorage";

const defaultTodos = [
  { tarea: "lavar la ropa", completed: false },
  { tarea: "pasear a rhaego", completed: false },
  { tarea: "hacer que juanma se ponga a programar", completed: false },
  { tarea: "conseguir laburo", completed: false },
  { tarea: "comer pan", completed: false },
];



function App() {
  const [todos, setTodo] = useLocalStorage("TODOLIST_V1", [])
  const [searchValue, setSearchValue] = useState("");

  
  let filerTodos = [];
  searchValue.length
  ?filerTodos = todos.filter( todo => (todo.tarea.toLowerCase().includes(searchValue)) )
  :filerTodos = todos;

  const onDeleteTodo = (id) => {
    let result = todos.filter((el) => el.tarea !== id);
    setTodo(result);
  };

  const onCompleteTodo = (id) => {
    let result = todos.map((el) => {
      if (el.tarea !== id) {
        return el;
      } else {
        return { tarea: el.tarea, completed: true };
      }
    });
    setTodo(result);
  };

  return (
    <AppUI
      defaultTodosValue={todos}
      onDeleteTodo={onDeleteTodo}
      onCompleteTodo={onCompleteTodo}
      filerTodos={filerTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
  );
}
export default App;
