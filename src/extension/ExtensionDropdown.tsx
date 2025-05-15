import ExtensionDeleteModal from "./ExtensionDeleteModal";
import { ExtensionDropdownProps } from "../type/extension";
import ExtensionFullScreenModal from "./ExtensionFullScreenModal";
import { useState } from "react";

export default function ExtensionDropdown({ shortsObj, setOpenDropdownId }: ExtensionDropdownProps) {
  const [isFullScreenModalOpen, setIsFullScreenModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleFullScreenModal = () => {
    setIsFullScreenModalOpen((prev) => !prev);
  };

  const handleDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  return (
    <>
      <div className="absolute bottom-6 right-0 mb-2 w-40 overflow-hidden rounded-md border bg-white text-center shadow-lg">
        <ul>
          <li
            className="cursor-pointer border-b border-gray04 px-4 py-2 hover:bg-gray03"
            onClick={handleFullScreenModal}
          >
            Open Full Screen
          </li>
          <li className="cursor-pointer px-4 py-2 hover:bg-gray03" onClick={handleDeleteModal}>
            Delete Shorts
          </li>
        </ul>
      </div>
      {isFullScreenModalOpen && (
        <ExtensionFullScreenModal
          shortsUrl={shortsObj.embedUrl}
          setIsModalOpen={setIsFullScreenModalOpen}
          setOpenDropdownId={setOpenDropdownId}
        />
      )}
      {isDeleteModalOpen && (
        <ExtensionDeleteModal
          shortsObj={shortsObj}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          setOpenDropdownId={setOpenDropdownId}
        />
      )}
    </>
  );
}
