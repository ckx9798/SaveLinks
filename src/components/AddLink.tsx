import Button from "./Button";
import SelectFolderModal from "./SelectFolderModal";
import { useState } from "react";

export default function AddLink({ folderList }) {
  const [newLink, setNewLink] = useState("");
  const [isModal, setIsModal] = useState(false);

  const handleModalOpen = () => {
    setIsModal(true);
  };

  return (
    <>
      <div className="flex max-h-[120px] w-full max-w-[800px] items-center justify-between rounded-xl border border-primary bg-white px-3 py-2 md:px-5 md:py-2">
        <div className="flex w-full gap-5">
          <img src="/link.svg" />
          <input
            placeholder="링크를 추가해 보세요"
            className="mr-5 w-full bg-inherit px-2 text-2xl focus:outline-none md:py-2"
            onChange={(e) => {
              setNewLink(e.target.value);
              console.log(newLink);
            }}
          />
        </div>
        <Button size="xs" text="추가하기" onClick={handleModalOpen} />
      </div>
      {isModal && <SelectFolderModal setIsModal={setIsModal} folderList={folderList} newLink={newLink} />}
    </>
  );
}
