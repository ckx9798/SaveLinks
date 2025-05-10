import Button from "../components/Button";
import { ExtensionDeleteModalProps } from "../type/extension";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useSavedUrls } from "../utils/useSavedUrls";

export default function ExtensionDeleteModal({
  shortsObj,
  setIsDeleteModalOpen,
  setOpenDropdownId,
}: ExtensionDeleteModalProps) {
  const handleCloseModal = () => {
    setIsDeleteModalOpen(false);
    setOpenDropdownId(null);
  };

  const { deleteItem } = useSavedUrls();

  const handleDeleteShorts = () => {
    deleteItem(shortsObj.id);
    setIsDeleteModalOpen(false);
    setOpenDropdownId(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleCloseModal}
    >
      <div
        className="lg: relative flex h-[220px] w-[320px] flex-col items-center justify-between rounded-3xl bg-white px-8 py-14 shadow-lg sm:px-16 md:h-[250px] md:w-[450px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <IoCloseCircleOutline
          className="absolute right-3 top-3 cursor-pointer text-2xl md:text-3xl"
          onClick={handleCloseModal}
        />
        {/* 제목 */}
        <h2 className="text-4xl">Delete Shorts</h2>

        <div className="flex w-full gap-4">
          {/* 버튼 */}
          <Button size="response" text={"확인"} color={"gradientBlue"} onClick={handleDeleteShorts} />
          <Button size="response" text={"취소"} color={"gradientRed"} onClick={handleCloseModal} />
        </div>
      </div>
    </div>
  );
}
