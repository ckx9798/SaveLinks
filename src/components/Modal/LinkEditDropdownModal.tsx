import Button from "../Button";
import { EditLinkUrl } from "../../api/links";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LinkEditDropdownModalProps } from "../../type/modal";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function LinkEditDropdownModal({ setIsEditModalOpen, linkId }: LinkEditDropdownModalProps) {
  const [newLink, setNewLink] = useState<string>("");

  const queryClient = useQueryClient();

  const handleModalClose = (e: React.MouseEvent<SVGElement, MouseEvent>): void => {
    e.preventDefault();
    setIsEditModalOpen(false);
  };

  const sendEditLinkRequest = async (): Promise<void> => {
    try {
      await EditLinkUrl(linkId, newLink);
      await queryClient.invalidateQueries({ queryKey: ["links"] }); // "links" 쿼리 무효화
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("폴더명 수정 중 오류", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative z-[10000] flex h-auto w-[400px] flex-col items-center rounded-3xl bg-white p-10 shadow-lg">
        <IoCloseCircleOutline className="absolute right-3 top-3 cursor-pointer text-3xl" onClick={handleModalClose} />

        <h2 className="mb-2 text-4xl">Edit link</h2>
        <input
          type="text"
          className="rounded-md border border-black px-4 py-1 text-2xl placeholder:text-xl focus:border-primary focus:outline-none"
          placeholder="New link URL"
          onChange={(e) => {
            setNewLink(e.target.value);
          }}
        />
        <div className="mt-6">
          <Button size="md" text="Edit" onClick={sendEditLinkRequest} />
        </div>
      </div>
    </div>
  );
}
