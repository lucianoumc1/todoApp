import { TodoCount } from "../TodoCount";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import "./App.css";

export function AppUI({ defaultTodosValue, onDeleteTodo, onCompleteTodo, filerTodos, searchValue, setSearchValue }){

	return (
		<main className="main">
			<div className="new-task">
				<h2>Create new task</h2>
				<p>Task Name</p>
				<input/>
				<button>Create task</button>
				<img/>
			</div>
			<div className="your-task">
				<h2 className="your-task__tittle">Your tasks</h2>
				<TodoCount list={defaultTodosValue}/>
				<TodoSearch
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>
				<TodoList>
						{filerTodos.map( todo =>
						(<TodoItem 
							key = {todo.tarea} 
							value = {todo.tarea}
							completed = {todo.completed}
							onDelete = {onDeleteTodo}
						onComplete = {onCompleteTodo}
						/>)
						)}
				</TodoList>
			</div>
		</main>
		);
  }