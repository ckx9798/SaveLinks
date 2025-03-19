import React, { useState } from "react";

import AddTodoModal from "./AddTodoModal";
import Button from "../Button";
import { Todo } from "../type/todo";

interface AddTodosProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

const AddTodos: React.FC<AddTodosProps> = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");
  const [isModal, setIsModal] = React.useState(false);

  const handleAddTodoModalOpen = () => {
    setIsModal(true);
  };

  return (
    <>
      <div className="flex max-h-[120px] w-full max-w-[800px] items-center justify-between rounded-xl border border-primary bg-white px-3 py-2 md:px-5 md:py-2">
        <div className="flex w-full gap-5">
          <input
            placeholder="Try adding a new Todo"
            className="mr-5 w-full bg-inherit px-2 text-2xl focus:outline-none md:py-2"
            onChange={(e) => {
              setNewTodo(e.target.value);
              console.log(newTodo);
            }}
          />
        </div>
        <Button size="xs" text="추가하기" onClick={handleAddTodoModalOpen} />
      </div>
      {isModal && <AddTodoModal setIsAddTodoOpen={setIsModal} />}
    </>
  );
};

export default AddTodos;
