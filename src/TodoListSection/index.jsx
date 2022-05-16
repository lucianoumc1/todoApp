import React from 'react'
import { TodoContext } from "../TodoContext";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoHide } from "../TodoHide";
import { Loading } from "../Loading";
import { TodoCount } from "../TodoCount";

export function TodoListSection() {
  const {
    filterTodos,
    onCompleteTodo,
    onDeleteTodo,
    chargeState,
  } = React.useContext(TodoContext);

  return (
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
  )
}
