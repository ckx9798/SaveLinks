import EditMemoModal from "./EditMemoModal";
import { MemoItemProps } from "../../type/memo";
import { useState } from "react";

export default function MemoItem({ memo, setMemos, selectedMemo, setSelectedMemo }: MemoItemProps) {
  const [isEditMemoModalOpen, setIsEditMemoModalOpen] = useState(false);

  return (
    <>
      <div
        className="group relative mt-2 h-auto w-full overflow-hidden rounded-xl border-2 bg-gray01 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-primary hover:bg-gradient-to-br hover:from-gray01 hover:to-white/20 hover:shadow-2xl lg:p-3"
        onClick={() => {
          setIsEditMemoModalOpen(true);
          setSelectedMemo(memo);
        }}
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute left-2 flex space-x-2">
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-md md:h-3 md:w-3" />
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-md md:h-3 md:w-3" />
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-md md:h-3 md:w-3" />
          </div>
          <div className="max-w-[33%] truncate text-center text-xl font-semibold text-slate-800 lg:text-2xl">
            {memo.title}
          </div>
        </div>

        <div className="flex h-full flex-col justify-between px-2 pb-8 lg:mt-2">
          <p className="line-clamp-1 text-2xl text-primary md:text-3xl"></p>
          <p className="max-h-[120px] min-h-[120px] overflow-y-auto whitespace-pre-line text-xl leading-6 text-gray04 hover:text-2xl md:mb-3 md:text-xl">
            {memo.description || `No description provided`}
          </p>
          <p className="text-right text-lg text-gray04 md:block md:text-xl">
            {new Date(memo.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
      {isEditMemoModalOpen && selectedMemo && (
        <EditMemoModal
          setIsEditMemoModalOpen={setIsEditMemoModalOpen}
          selectedMemo={selectedMemo}
          setSelectedMemo={setSelectedMemo}
          setMemos={setMemos}
        />
      )}
    </>
  );
}
