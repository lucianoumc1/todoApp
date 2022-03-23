import "./TodoList.css"

export function TodoList(props){
    return(
        <ul className="todo-list">
            {props.children}
        </ul>
    )
}