import DeleteFolderModal from "../Modal/DeleteFolderModal";
import { useState } from "react";

export default function DeleteFolderImage({ currentFolder }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <button className="flex items-center gap-1 text-gray02 md:text-2xl" onClick={() => handleModalOpen()}>
        <img src="/delete.svg" alt="" />
        Delete
      </button>
      {isModalOpen && <DeleteFolderModal currentFolder={currentFolder} setIsModalOpen={setIsModalOpen} />}
    </>
  );
}
