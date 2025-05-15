import { ExtensionFullScreenModalProps } from "../type/extension";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function ExtensionFullScreenModal({
  shortsUrl,
  setIsModalOpen,
  setOpenDropdownId,
}: ExtensionFullScreenModalProps) {
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setOpenDropdownId(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleCloseModal}
    >
      <div className="relative flex h-[70%] w-[95%] flex-col items-center rounded-3xl bg-white px-1 py-10 shadow-lg md:h-[100%] md:w-[50%] lg:px-16">
        {/* 닫기 버튼 */}
        <IoCloseCircleOutline
          className="absolute right-3 top-3 cursor-pointer text-2xl md:text-3xl"
          onClick={handleCloseModal}
        />
        <iframe
          src={shortsUrl}
          className="aspect-[2/3] h-full w-[100%] rounded-xl object-cover hover:border-2 hover:border-primary"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
}
