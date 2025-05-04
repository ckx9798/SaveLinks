import { useEffect, useRef, useState } from "react";

import DeleteShortsModal from "./DeleteShortsModal";
import FullScreenShortsModal from "./FullScreenShortsModal";
import { ShortsDropdownProps } from "../../api/shorts";

export default function ShortsDropddown({ link, setOpenDropdownId }: ShortsDropdownProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ✅ 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpenDropdownId]);

  const handleShortsModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  return (
    <>
      <div
        ref={dropdownRef}
        className="absolute bottom-6 right-0 mb-2 w-40 overflow-hidden rounded-md border bg-white text-center shadow-lg"
      >
        <ul>
          <li className="cursor-pointer border-b border-gray04 px-4 py-2 hover:bg-gray03" onClick={handleShortsModal}>
            Open Fullscreen
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
