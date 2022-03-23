import React from "react";
import { TodoCount } from "../TodoCount";
import { TodoContext } from "../TodoContext";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoHide } from "../TodoHide";
import { Loading } from "../Loading";
import { NewTask } from "../NewTask/Index";
import "./App.css";

export function AppUI() {
  const {
    // filterTodos,
    filterTodos,
    onCompleteTodo,
    onDeleteTodo,
    chargeState,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <main className="main">
      <NewTask/>
      <div className="your-task">
        <h2 className="your-task__tittle">Your tasks</h2>
        <TodoCount />
        <TodoSearch />
        {chargeState === "Loading" && <Loading />}
        {chargeState === "Error" && "No se pudo acceder a la base de datos"}
        {chargeState === "Done" && (
          <>
            <TodoList>
              {filterTodos.map((todo) => (
                <TodoItem
                  key={todo.tarea}
                  value={todo.tarea}
                  completed={todo.completed}
                  onComplete={onCompleteTodo}
                  onDelete={onDeleteTodo}
                />
              ))}
            </TodoList>
            <TodoHide />
          </>
        )}
      </div>
    </main>
  );
}
