import ChangeFolderNameModal from "../Modal/ChangeFolderNameModal";
import { EditFolderNameImageProps } from "../../type/folder";
import { useState } from "react";

export default function ChangeFolderNameImage({ currentFolder }: EditFolderNameImageProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleModalOpen = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <button className="flex items-center gap-1 text-gray02 md:text-2xl" onClick={() => handleModalOpen()}>
        <img src="/pen.svg" alt="폴더명수정" />
        Change
      </button>
      {isModalOpen && <ChangeFolderNameModal setIsModalOpen={setIsModalOpen} currentFolder={currentFolder} />}
    </>
  );
}
