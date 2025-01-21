import Button from "./Button";
import { IoCloseCircleOutline } from "react-icons/io5";
import { postLinks } from "../api/links";
import { useState } from "react";

export default function SelectFolderModal({ setIsModal, folderList, newLink }) {
  const [selectFolder, setSelectFolder] = useState("");

  const handlePostNewLink = () => {
    postLinks(newLink, selectFolder);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex h-auto min-h-[260px] w-[500px] flex-col items-center rounded-3xl bg-white p-10">
        <IoCloseCircleOutline
          className="absolute right-3 top-3 cursor-pointer text-3xl"
          onClick={() => setIsModal(false)}
        />

        <h2 className="mb-5 text-5xl">폴더 선택하기</h2>
        <ul className="mb-4 flex flex-col gap-1 text-2xl">
          {folderList.map((folder) => {
            return (
              <li
                className={`h-10 w-full min-w-[200px] cursor-pointer rounded-xl px-5 text-center leading-10 hover:bg-slate-200 active:bg-blue-200 ${selectFolder === folder.name ? "bg-blue-200" : ""}`}
                value={folder.name}
                onClick={() => {
                  setSelectFolder(folder.id);
                }}
              >
                {folder.name}
              </li>
            );
          })}
        </ul>

        <div className="mt-auto">
          <Button size="md" text="저장하기" onClick={handlePostNewLink} />
        </div>
      </div>
    </div>
  );
}
