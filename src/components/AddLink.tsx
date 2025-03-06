import { AddLinkProps } from "../type/folder";
import Button from "./Button";
import SelectLinkFolderModal from "./Modal/SelectLinkFolderModal";
import { useState } from "react";

export default function AddLink({ folderList }: AddLinkProps) {
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
            placeholder="Try adding a link"
            className="mr-5 w-full bg-inherit px-2 text-2xl focus:outline-none md:py-2"
            onChange={(e) => {
              setNewLink(e.target.value);
            }}
          />
        </div>
        <Button size="xs" text="Add" onClick={handleModalOpen} />
      </div>
      {isModal && <SelectLinkFolderModal setIsModal={setIsModal} folderList={folderList} newLink={newLink} />}
    </>
  );
}
