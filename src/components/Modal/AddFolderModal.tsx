import { AddFolderModalProps } from "../../type/folder";
import Button from "../Button";
import { IoCloseCircleOutline } from "react-icons/io5";
import { postFolder } from "../../api/folder";
import { useState } from "react";

export default function AddFolderModal({ setIsAddFolderOpen }: AddFolderModalProps) {
  const [newFolderName, setNewFolderName] = useState("");

  const fetchPostFolder = () => {
    postFolder(newFolderName);
    setIsAddFolderOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex h-auto min-h-[260px] w-[400px] flex-col items-center rounded-3xl bg-white p-10">
        <IoCloseCircleOutline
          className="absolute right-3 top-3 cursor-pointer text-3xl"
          onClick={() => setIsAddFolderOpen(false)}
        />

        <h2 className="mb-5 text-4xl">Folder Name</h2>
        <input
          type="text"
          className="rounded-md border border-black px-4 py-1 text-2xl placeholder:text-xl focus:border-primary focus:outline-none"
          placeholder="Please enter folder name"
          onChange={(e) => {
            setNewFolderName(e.target.value);
          }}
        />
        <div className="mt-auto">
          <Button size="md" text="추가하기" onClick={fetchPostFolder} />
        </div>
      </div>
    </div>
  );
}
