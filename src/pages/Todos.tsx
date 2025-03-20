import AddTodos from "../components/Todos/AddTodo";
import Header from "../components/Header";
import NoTodos from "../components/Todos/NoTodos";
import TodoItem from "../components/Todos/TodoItem";
import { useState } from "react";

interface Todo {
  id: string; // 고유 ID (UUID 또는 숫자)
  title: string; // 할 일 제목
  description?: string; // 상세 설명 (옵션)
  isCompleted: boolean; // 완료 여부
  createdAt: Date; // 생성 날짜
  updatedAt?: Date; // 업데이트된 날짜 (옵션)
  isFavorite?: boolean; // 중요 표시 여부
}

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todos);

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center bg-gray05 px-3">
        <Header />
        <div className="mb-8 flex h-[80px] w-full items-center justify-center md:h-[120px]">
          <AddTodos todos={todos} setTodos={setTodos} />
        </div>
      </div>

      {todos.length !== 0 ? (
        <div className="align-items-center mx-auto mb-6 grid w-full max-w-[1200px] grid-cols-2 justify-items-center gap-x-2 px-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-4">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      ) : (
        <NoTodos />
      )}
    </>
  );
}
