import React from "react";
import { TodoContext } from "../TodoContext";
import { NewTaskButton } from "../NewTaskButton";
import { TodoListSection } from "../TodoListSection";
import { NewTask } from "../NewTask/Index";
import Modal from "../Modal";
import "./App.css";

export function AppUI() {
  const { openModal } = React.useContext(TodoContext);

  return (
    <main className="main">
      <NewTask/>
      {openModal && (
        <Modal>
          <NewTask/>
        </Modal>
      )}
      <NewTaskButton />
      <TodoListSection/>
    </main>
  );
}
