import EditMemoModal from "./EditMemoModal";
import { MemoItemProps } from "../../type/memo";
import { useState } from "react";

export default function MemoItem({ memo, setMemos, selectedMemo, setSelectedMemo }: MemoItemProps) {
  const [isEditMemoModalOpen, setIsEditMemoModalOpen] = useState(false);

  return (
    <>
      <div
        className="group relative mt-2 h-auto w-full overflow-hidden rounded-xl border-2 border-gray01 bg-gray01 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-primary hover:bg-gradient-to-br hover:from-gray01 hover:to-white/20 hover:shadow-2xl lg:p-3"
        onClick={() => {
          setIsEditMemoModalOpen(true);
          setSelectedMemo(memo);
        }}
      >
        <div className="flex h-full flex-col justify-between px-2 pb-3">
          <p className="line-clamp-1 text-2xl text-primary md:text-3xl">{memo.title}</p>
          <p className="max-h-[120px] min-h-[120px] overflow-y-auto whitespace-pre-line text-xl leading-6 text-gray04 md:mb-3 md:text-2xl md:font-medium xl:min-h-[130px]">
            {memo.description || `No description provided`}
          </p>
          <p className="-mb-2 mt-2 text-right text-lg text-gray04 md:block md:text-xl">
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
