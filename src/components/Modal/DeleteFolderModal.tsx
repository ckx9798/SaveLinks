import Button from "../Button";
import { EditFolderNameModalProps } from "../../type/folder";
import { IoCloseCircleOutline } from "react-icons/io5";
import { deleteFolder } from "../../api/folder";
import { useQueryClient } from "@tanstack/react-query";

export default function DeleteFolderModal({ currentFolder, setIsModalOpen }: EditFolderNameModalProps) {
  const queryClient = useQueryClient();

  const handleDeleteFolder = async () => {
    try {
      await deleteFolder(currentFolder.id); // 폴더 삭제 요청
      await queryClient.invalidateQueries({ queryKey: ["folders"] }); // "folders" 쿼리 무효화
      setIsModalOpen(false); // 모달 닫기
      window.location.reload(); // 삭제 후 페이지 새로고침
    } catch (error) {
      console.error("폴더 삭제 중 오류", error);
    }
  };

  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative z-[10000] flex h-auto w-[400px] flex-col items-center rounded-3xl bg-white p-10 shadow-lg">
        <IoCloseCircleOutline className="absolute right-3 top-3 cursor-pointer text-3xl" onClick={handleModalClose} />

        <h2 className="mb-2 text-4xl">Delete Folder</h2>
        <span>{currentFolder.name}</span>

        <div className="mt-6">
          <Button size="md" text="Delete" onClick={handleDeleteFolder} />
        </div>
      </div>
    </div>
  );
}
