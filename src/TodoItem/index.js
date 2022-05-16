import "./TodoItem.css";

export function TodoItem({ value, completed, onComplete, onDelete }){
    return(
        <div className= {`note ${completed && "completed"}`}>
            <span className={`item-check ${completed && "checked"}`} onClick={() => onComplete(value)} ></span>
            <li >{value}</li>
            <span onClick={() => onDelete(value)} className="item-delete"></span>
        </div>
    )
}