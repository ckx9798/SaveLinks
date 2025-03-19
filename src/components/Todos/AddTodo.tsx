import React, { useState } from "react";

import AddTodoModal from "./AddTodoModal";
import Button from "../Button";
import { Todo } from "../type/todo";

interface Todo {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt?: Date;
  isFavorite?: boolean;
}

interface AddTodosProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

export default function AddTodos({ todos, setTodos }: AddTodosProps) {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (!newTodo.trim()) return; // 빈 값 방지

    const todo: Todo = {
      id: crypto.randomUUID(), // 고유 ID 생성
      title: newTodo,
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      isFavorite: false,
    };

    setTodos([...todos, todo]); // 부모 컴포넌트의 상태 업데이트
    setNewTodo(""); // 입력 필드 초기화
  };

  return (
    <>
      <div className="flex max-h-[120px] w-full max-w-[800px] items-center justify-between rounded-xl border border-primary bg-white px-3 py-2 md:px-5 md:py-2">
        <div className="flex w-full gap-5">
          <img src="/link.svg" />
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="할 일을 입력하세요..."
            className="mr-5 w-full bg-inherit px-2 text-2xl focus:outline-none md:py-2"
          />
        </div>
        <Button size="xs" text="Add" onClick={handleAddTodo} />
      </div>
    </>
  );
}
