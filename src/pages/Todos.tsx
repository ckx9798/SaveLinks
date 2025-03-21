import AddTodo from "../components/Todos/AddTodo";
import Header from "../components/Header";
import NoTodos from "../components/Todos/NoTodos";
import TodoItem from "../components/Todos/TodoItem";
import { TodoProps } from "../type/todo";
import { useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center bg-gray05 px-3">
        <Header />
        <div className="mb-8 flex h-[80px] w-full items-center justify-center md:h-[120px]">
          <AddTodo todos={todos} setTodos={setTodos} />
        </div>
      </div>

      {todos.length !== 0 ? (
        <div className="align-items-center mx-auto mb-6 grid w-full max-w-[1200px] grid-cols-2 justify-items-center gap-x-2 px-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-4">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} setTodos={() => setTodos} />
          ))}
        </div>
      ) : (
        <NoTodos />
      )}
    </>
  );
}
