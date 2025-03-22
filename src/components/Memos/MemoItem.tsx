import EditTodoModal from "./EditMemoModal";
import { MemoItemProps } from "../../type/memo";
import { useState } from "react";

export default function MemoItem({ memo, setMemos, selectedMemo, setSelectedMemo }: MemoItemProps) {
  const [isEditMemoModalOpen, setIsEditMemoModalOpen] = useState(false);

  return (
    <>
      <div
        className="relative mt-2 h-auto w-full overflow-hidden rounded-xl border-2 border-primary shadow-xl hover:scale-105 lg:p-3"
        onClick={() => {
          setIsEditMemoModalOpen(true);
          setSelectedMemo(memo);
        }}
      >
        <div className="flex h-full flex-col justify-between px-2 pb-3">
          <p className="line-clamp-1 text-2xl text-blue-300 md:text-2xl">{memo.title}</p>
          <h2 className="line-clamp-1 min-h-[72px] text-xl leading-6 md:mb-3 md:min-h-[90px] md:text-2xl md:font-medium">
            {memo.description || `No description provided`}
          </h2>
          <p className="-mb-2 hidden text-lg md:block md:text-xl">{new Date(memo.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
      {isEditMemoModalOpen && selectedMemo && (
        <EditTodoModal
          setIsEditMemoModalOpen={setIsEditMemoModalOpen}
          selectedMemo={selectedMemo}
          setSelectedMemo={setSelectedMemo}
          setMemos={setMemos}
        />
      )}
    </>
  );
}
