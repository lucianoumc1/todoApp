import ReactDOM from "react-dom"
import "./Modal.css"

export function Modal(props){

  return ReactDOM.createPortal(
    <div className="modal__container">
      { props.children } 
    </div>,
    document.getElementById("modal")
  )  
}