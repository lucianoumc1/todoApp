import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext"
import { Modal } from "../Modal"
import { TaskDetail } from "../TaskDetail";

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}
export default App;
