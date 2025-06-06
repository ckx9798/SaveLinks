import { normalizeInstagramUrl, normalizeYoutubeUrl } from "../../utils/urlUtils";

import Button from "../Button";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";
import { SelectLinkFolderModalProps } from "../../type/modal";
import { postLinks } from "../../api/links";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function SelectLinkFolderModal({
  setIsModal,
  folderList,
  newLink,
  setNewLink,
}: SelectLinkFolderModalProps) {
  const [selectFolder, setSelectFolder] = useState<number | null>(null);

  const queryClient = useQueryClient();

  const handlePostNewLink = async () => {
    if (selectFolder !== null) {
      let cleanedLink = newLink.trim();

      if (cleanedLink.includes("youtube.com") || cleanedLink.includes("youtu.be")) {
        cleanedLink = normalizeYoutubeUrl(cleanedLink);
      } else if (cleanedLink.includes("instagram.com")) {
        cleanedLink = normalizeInstagramUrl(cleanedLink);
      }

      await postLinks(cleanedLink, selectFolder);
      await queryClient.invalidateQueries({ queryKey: ["links"] });
      await queryClient.invalidateQueries({ queryKey: ["folders"] });

      setNewLink("");
      setIsModal(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex h-auto min-h-[260px] flex-col items-center rounded-3xl bg-white p-10 md:w-[500px]">
        <IoCloseCircleOutline
          className="absolute right-3 top-3 cursor-pointer text-3xl"
          onClick={() => setIsModal(false)}
        />
        <div>
          <h2 className="text-center text-4xl font-medium text-black md:text-5xl">Selet Folder</h2>
          <h3 className="mt-4 line-clamp-2 max-w-[400px] whitespace-pre-line text-center text-2xl text-gray-400">
            {newLink}
          </h3>
        </div>

        <ul className="my-8 flex flex-col gap-1 text-2xl">
          {folderList.map((folder) => {
            return (
              <li
                className={`h-10 w-full min-w-[280px] cursor-pointer rounded-xl px-3 text-3xl leading-10 hover:bg-slate-200 active:bg-blue-100 ${folder.id === selectFolder ? "bg-blue-100 text-primary" : "bg-inherit"} flex justify-between`}
                value={folder.name}
                onClick={() => {
                  setSelectFolder(folder.id);
                }}
              >
                <div>
                  {folder.name}
                  <span className="ml-3 text-lg text-gray-400">{folder.linkCount}개의 링크</span>
                </div>
                <div>{folder.id === selectFolder && <CiBookmarkCheck className="mt-1 text-primary" />}</div>
              </li>
            );
          })}
        </ul>

        <div className="mt-auto">
          <Button size="md" text="Add" onClick={handlePostNewLink} />
        </div>
      </div>
    </div>
  );
}
