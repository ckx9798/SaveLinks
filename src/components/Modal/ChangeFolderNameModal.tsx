import Button from "../Button";
import { EditFolderNameModalProps } from "../../type/folder";
import { IoCloseCircleOutline } from "react-icons/io5";
import { changeFolderName } from "../../api/folder";
import { useState } from "react";

export default function ChangeFolderNameModal({ setIsModalOpen, currentFolder }: EditFolderNameModalProps) {
  const [newFolderName, setNewFolderName] = useState<string>("");
  const handleChangeFolderName = async () => {
    try {
      await changeFolderName(currentFolder.id, newFolderName);
      setIsModalOpen(false);
    } catch (error) {
      console.error("폴더명 변경 중 오류", error);
    }
  };
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative z-[10000] flex h-auto w-[400px] flex-col items-center rounded-3xl bg-white p-10 shadow-lg">
        <IoCloseCircleOutline className="absolute right-3 top-3 cursor-pointer text-3xl" onClick={handleModalClose} />

        <h2 className="mb-4 text-4xl">New FoldeName</h2>
        <input
          type="text"
          className="rounded-md border border-black px-4 py-2 text-2xl placeholder:text-xl focus:border-primary focus:outline-none"
          placeholder="write new foldername"
          onChange={(e) => {
            setNewFolderName(e.target.value);
          }}
        />
        <div className="mt-6">
          <Button size="md" text="Change" onClick={handleChangeFolderName} />
        </div>
      </div>
    </div>
  );
}
