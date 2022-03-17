import "./TodoItem.css";

export function TodoItem(props){
    let { value } = props;
    return(
        <div className= {`note ${props.completed && "completed"}`}>
            <span className={`item-check ${props.completed && "checked"}`} onClick={() => props.onComplete(value)} ></span>
            <li >{value}</li>
            <span onClick={() => props.onDelete(value)} className="item-delete"></span>
        </div>
    )
}