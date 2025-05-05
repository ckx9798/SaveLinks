import DeleteShortsModal from "./DeleteShortsModal";
import FullScreenShortsModal from "./FullScreenShortsModal";
import { ShortsDropdownProps } from "../../type/shorts";
import { useState } from "react";

export default function ShortsDropddown({ link, setOpenDropdownId }: ShortsDropdownProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleShortsModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  return (
    <>
      <div className="absolute bottom-6 right-0 mb-2 w-40 overflow-hidden rounded-md border bg-white text-center shadow-lg">
        <ul>
          <li className="cursor-pointer border-b border-gray04 px-4 py-2 hover:bg-gray03" onClick={handleShortsModal}>
            Open Full Screen
          </li>
          <li className="cursor-pointer px-4 py-2 hover:bg-gray03" onClick={handleDeleteModal}>
            Delete Shorts
          </li>
        </ul>
      </div>
      {isModalOpen && (
        <FullScreenShortsModal
          shortsUrl={link.url}
          setIsModalOpen={setIsModalOpen}
          setOpenDropdownId={setOpenDropdownId}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteShortsModal
          shortsId={link.id}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          setOpenDropdownId={setOpenDropdownId}
        />
      )}
    </>
  );
}
