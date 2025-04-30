import { useEffect, useState } from "react";

import Button from "../Button";
import { EditMemoModalProps } from "../../type/memo";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function EditMemoModal({
  setIsEditMemoModalOpen,
  selectedMemo,
  setSelectedMemo,
  setMemos,
}: EditMemoModalProps) {
  const [updatedTitle, setUpdatedTitle] = useState(selectedMemo.title);
  const [updatedDescription, setUpdatedDescription] = useState(selectedMemo.description || "");

  const handleEditMemoModalClose = () => setIsEditMemoModalOpen(false);

  // 메모 내용 수정하기
  const handleEditMemo = () => {
    if (!selectedMemo) return;

    const updatedMemo = {
      ...selectedMemo,
      title: updatedTitle,
      description: updatedDescription,
      updatedAt: new Date(),
    };

    setMemos((prevMemos) => prevMemos.map((memo) => (memo.id === updatedMemo.id ? updatedMemo : memo)));

    setSelectedMemo(updatedMemo);
    handleEditMemoModalClose();
  };

  // 메모 삭제하기
  const handleDeleteMemo = () => {
    if (!selectedMemo) return;

    setMemos((prevMemos) => prevMemos.filter((memo) => memo.id !== selectedMemo.id));
    setSelectedMemo(null);
    setIsEditMemoModalOpen(false);
  };

  // ESC 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleEditMemoModalClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleEditMemoModalClose}
    >
      {/* 모달 컨테이너 */}
      <div
        className="relative flex h-auto min-h-[260px] w-[90%] max-w-[450px] flex-col items-center rounded-3xl bg-white p-4 shadow-lg sm:p-8 md:mx-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <IoCloseCircleOutline
          className="absolute right-3 top-2 cursor-pointer text-lg text-gray-400 hover:text-gray-600 md:text-2xl"
          onClick={handleEditMemoModalClose}
        />

        {/* 제목 입력 */}
        <input
          type="text"
          className="mb-3 mt-4 w-full rounded-md border border-gray-300 p-2 text-2xl font-bold focus:border-blue-500 focus:outline-none md:mt-2"
          placeholder="제목을 입력하세요..."
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />

        {/* 설명 입력 */}
        <textarea
          className="min-h-[120px] w-full resize-none rounded-md border border-gray-300 p-3 text-lg focus:border-blue-500 focus:outline-none"
          placeholder="내용을 입력하세요..."
          value={updatedDescription}
          onChange={(e) => setUpdatedDescription(e.target.value)}
        />

        {/* 수정 버튼 */}
        <div className="mt-5 flex w-full justify-end gap-2">
          <Button size="md" text="수정하기" onClick={handleEditMemo} />
          <Button size="md" text="삭제하기" onClick={handleDeleteMemo} color="gradientRed" />
        </div>
      </div>
    </div>
  );
}
