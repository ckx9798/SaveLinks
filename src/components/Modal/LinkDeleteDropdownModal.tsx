import Button from "../Button";
import { DeleteLinkUrl } from "../../api/links";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LinkDeleteDropdownModalProps } from "../../type/modal";
import { useQueryClient } from "@tanstack/react-query";

export default function LinkDeleteDropdownModal({ setIsDeleteModalOpen, linkId }: LinkDeleteDropdownModalProps) {
  const handleModalClose = (e: React.MouseEvent<SVGElement, MouseEvent>): void => {
    e.preventDefault();
    setIsDeleteModalOpen((prev) => !prev);
  };

  const queryClient = useQueryClient();

  const sendDeleteRequest = async (): Promise<void> => {
    try {
      await DeleteLinkUrl(linkId); // 링크 삭제 요청
      await queryClient.invalidateQueries({ queryKey: ["links"] }); // "links" 쿼리 무효화
      setIsDeleteModalOpen((prev) => !prev); // 모달 닫기
    } catch (error) {
      console.error("링크 삭제 중 오류", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative z-[10000] flex h-auto w-[400px] flex-col items-center rounded-3xl bg-white p-10 shadow-lg">
        <IoCloseCircleOutline className="absolute right-3 top-3 cursor-pointer text-3xl" onClick={handleModalClose} />
        <h2 className="mb-2 text-4xl">Delete this link?</h2>
        <div className="mt-6">
          <Button size="md" text="Delete" onClick={sendDeleteRequest} />
        </div>
      </div>
    </div>
  );
}
