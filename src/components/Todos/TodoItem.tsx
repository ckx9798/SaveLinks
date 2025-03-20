import AddTodoModal from "./AddTodoModal";
import { useState } from "react";

interface Todo {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt?: Date;
  isFavorite?: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditTodo = () => {
    setIsEditModalOpen(true);
  };

  return (
    <>
      <div
        className="relative mt-2 h-auto w-full overflow-hidden rounded-xl border-2 border-primary shadow-xl hover:scale-105 lg:p-3"
        onClick={handleEditTodo}
      >
        {/* 내용 영역 */}
        <div className="flex h-full flex-col justify-between px-2 pb-3">
          {/* 제목 */}
          <p className="line-clamp-1 text-2xl text-blue-300 md:text-2xl">{todo.title}</p>

          {/* 설명 */}
          <h2 className="line-clamp-1 min-h-[72px] text-xl leading-6 md:mb-3 md:min-h-[90px] md:text-2xl md:font-medium">
            {todo.description || `No description provided`}
          </h2>

          {/* 날짜 */}
          <p className="-mb-2 hidden text-lg md:block md:text-xl">{new Date(todo.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
      {isEditModalOpen && <AddTodoModal setIsAddTodoOpen={setIsEditModalOpen} />}
    </>
  );
}
