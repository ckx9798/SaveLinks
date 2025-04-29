import { ChangeFolderNameImageProps } from "../../type/modal";
import CommonModal from "../Modal/CommonModal";
import { changeFolderName } from "../../api/folder";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function ChangeFolderNameImage({ currentFolder }: ChangeFolderNameImageProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newFolderName, setNewFolderName] = useState<string>("");
  const queryClient = useQueryClient();

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  const handleChangeFolderName = async () => {
    try {
      await changeFolderName(currentFolder.id, newFolderName);
      queryClient.invalidateQueries({ queryKey: ["folders"] });

      setNewFolderName("");
      setIsModalOpen(false);
    } catch (error) {
      console.error("폴더명 변경 중 오류", error);
    }
  };

  return (
    <>
      <button className="flex items-center gap-1 text-gray02 md:text-2xl" onClick={toggleModal}>
        <img src="/pen.svg" alt="폴더명수정" />
        Change
      </button>

      {isModalOpen && (
        <CommonModal
          title="New FolderName"
          inputPlaceholder="write new foldername"
          buttonText="Change"
          onClose={toggleModal}
          onSubmit={handleChangeFolderName}
          inputValue={newFolderName}
          setInputValue={setNewFolderName}
        />
      )}
    </>
  );
}
