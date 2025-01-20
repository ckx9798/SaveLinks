import Button from "./Button";
import Modal from "./Modal";
import { postLinks } from "../api/links";
import { useState } from "react";

export default function AddLink() {
  const [link, setLink] = useState("");
  const [isModal, setIsModal] = useState(false);

  const handleModalOpen = () => {
    setIsModal(true);
  };

  const handleAddLink = (e) => {
    e.preventDefault();
    // setIsModal(true);
    console.log(1);
    // postLinks();
  };
  return (
    <>
      <div
        className="flex max-h-[120px] w-full max-w-[800px] items-center justify-between rounded-xl border border-primary bg-white px-3 py-2 md:px-5 md:py-2"
        onSubmit={handleAddLink}
      >
        <div className="flex w-full gap-5">
          <img src="/link.svg" />
          <input
            placeholder="링크를 추가해 보세요"
            className="mr-5 w-full bg-inherit px-2 text-2xl md:py-2"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <Button size="xs" text="추가하기" onClick={handleModalOpen} />
      </div>
      {isModal && <Modal setIsModal={setIsModal} />}
    </>
  );
}
