import { Suspense, lazy } from "react";

import Button from "./Button";
import Cookies from "js-cookie";
import { getFolder } from "../api/folder";
import isValidUrl from "../utils/isValidUrl";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function AddLink() {
  const token = Cookies.get("accessToken");
  const queryEnabled = !!token;

  const { data: folderData } = useQuery({ queryKey: ["folders"], queryFn: getFolder, enabled: queryEnabled });

  const folderList = folderData || [];

  const [newLink, setNewLink] = useState("");
  const [isModal, setIsModal] = useState(false);
  console.log(newLink);
  const handleModalOpen = () => {
    if (!isValidUrl(newLink)) {
      toast.warn("유효한 링크 형식을 입력해주세요", {
        toastId: "invalid-link-warning",
      });
      return;
    }
    setIsModal(true);
  };

  const SelectLinkFolderModal = lazy(() => import("./Modal/SelectLinkFolderModal"));

  return (
    <>
      <div className="flex max-h-[120px] w-full max-w-[800px] items-center justify-between rounded-xl border-2 border-primary bg-gray01 px-3 py-2 md:px-5 md:py-2">
        <div className="flex w-full gap-5">
          <img src="/link.svg" alt="링크이미지" loading="eager" fetchPriority="high" />
          <input
            placeholder="Try adding a link"
            className="text-md mr-5 w-full bg-inherit px-2 focus:outline-none md:py-2 xl:text-2xl"
            onChange={(e) => {
              setNewLink(e.target.value);
            }}
          />
        </div>
        <Button size="xs" text="Add" onClick={handleModalOpen} />
      </div>
      {isModal && (
        <Suspense fallback={null}>
          <SelectLinkFolderModal setIsModal={setIsModal} folderList={folderList} newLink={newLink} />
        </Suspense>
      )}
    </>
  );
}
