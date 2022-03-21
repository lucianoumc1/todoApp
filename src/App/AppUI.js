import { TodoCount } from "../TodoCount";
import { TodoContext } from "../TodoContext";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoHide } from "../TodoHide";
import coverImage from "../images/task-image.png" 
import "./App.css";

export function AppUI() {
  return (
    <main className="main">
      <div className="new-task__container">
        <div className="new-task__form">
          <h2>Create a new task</h2>
          <p>Task Name</p>
          <input />
          <button>Create task</button>
        </div>
        <img className="new-task__cover" src={coverImage} />
      </div>

      <div className="your-task">
        <h2 className="your-task__tittle">Your tasks</h2>
        <TodoCount />
        <TodoSearch /> 

        <TodoContext.Consumer>
          {({ filterTodos,
              onCompleteTodo,
              onDeleteTodo 
            }) => (
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
          )}
        </TodoContext.Consumer>
        <TodoHide />
      </div>
    </main>
  );
}
