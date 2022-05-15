import React from "react";
import { TodoCount } from "../TodoCount";
import { TodoContext } from "../TodoContext";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoHide } from "../TodoHide";
import { Loading } from "../Loading";
import { NewTask } from "../NewTask/Index";
import { NewTaskButton } from "../NewTaskButton";

import "./App.css";
import Modal from "../Modal";

export function AppUI() {
  const {
    filterTodos,
    onCompleteTodo,
    onDeleteTodo,
    chargeState,
    openModal,
  } = React.useContext(TodoContext);

  return (
    <main className="main">
      <NewTask/>
      {openModal && (
        <Modal>
          <NewTask/>
        </Modal>
      )}
      <NewTaskButton/>
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
