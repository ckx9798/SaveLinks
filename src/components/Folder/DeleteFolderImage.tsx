import CommonModal from "../Modal/CommonModal";
import { DeleteFolderImageProps } from "../../type/modal";
import { deleteFolder } from "../../api/folder";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function DeleteFolderImage({ currentFolder, setCurrentFolder }: DeleteFolderImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  // 폴더 삭제 요청
  const handleDeleteFolder = async () => {
    try {
      await deleteFolder(currentFolder.id);
      await queryClient.invalidateQueries({ queryKey: ["folders"] });
      setIsModalOpen(false);
      setCurrentFolder(null);
    } catch (error) {
      console.error("폴더 삭제 중 오류", error);
    }
  };
  return (
    <>
      <button className="flex items-center gap-1 text-gray02 md:text-2xl" onClick={() => toggleModal()}>
        <img src="/delete.svg" alt="폴더 삭제 이미지" />
        Delete
      </button>
      {isModalOpen && (
        <CommonModal
          title="Delete Folder"
          buttonText="Delete"
          onClose={toggleModal}
          onSubmit={handleDeleteFolder}
          contentText={currentFolder.name}
          showInput={false}
          buttonColor="gradientRed"
        />
      )}
    </>
  );
}
