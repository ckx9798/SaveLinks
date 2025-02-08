import Button from "../Button";
import { IoCloseCircleOutline } from "react-icons/io5";
import { deleteFolder } from "../../api/folder";

export default function DeleteFolderModal({ currentFolder, setIsModalOpen }) {
  const handleDeleteFolder = async () => {
    try {
      await deleteFolder(currentFolder.id);
      setIsModalOpen(false);
    } catch (error) {
      console.error("폴더 삭제 중 오류", error);
    }
  };
  const handleModalClose = (current) => setIsModalOpen(!current);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative z-[10000] flex h-auto w-[400px] flex-col items-center rounded-3xl bg-white p-10 shadow-lg">
        <IoCloseCircleOutline className="absolute right-3 top-3 cursor-pointer text-3xl" onClick={handleModalClose} />

        <h2 className="mb-2 text-4xl">폴더 삭제</h2>
        <span>{currentFolder.name}</span>

        <div className="mt-6">
          <Button size="md" text="삭제하기" onClick={handleDeleteFolder} />
        </div>
      </div>
    </div>
  );
}
