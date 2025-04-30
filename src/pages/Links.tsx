import { LinkResponse, LinksByIdResponse } from "../type/link";
import { getFolder, postFolder } from "../api/folder";
import { getLinks, getLinksById } from "../api/links";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import ChageFolderNameImage from "../components/Folder/ChageFolderNameImage";
import CommonModal from "../components/Modal/CommonModal";
import Cookies from "js-cookie";
import DeleteFolderImage from "../components/Folder/DeleteFolderImage";
import { Folder } from "../type/folder";
import LinkItem from "../components/LinkItem";
import NoLinks from "../components/NoLinks";
import SearchLinkPart from "../components/LinksPage/SerchLinkPart";
import SeletFolderPart from "../components/LinksPage/SeletFolderPart";
import { useState } from "react";

export default function Links() {
  const [currentFolder, setCurrentFolder] = useState<Folder | null>(null); // 현재 선택된 폴더
  const [searchLink, setSearchLink] = useState<string>(""); // 검색어 상태
  const [isAddFolderModalOpen, setIsAddFolderModalOpen] = useState<boolean>(false); // 폴더 추가 모달 상태
  const [newFolderName, setNewFolderName] = useState(""); // 폴더추가 상태

  const token = Cookies.get("accessToken");
  const queryEnabled = !!token;

  // 링크 리스트 가져오기 API 요청
  const { data: linksData } = useQuery<LinkResponse>({
    queryKey: ["links"],
    queryFn: getLinks,
    enabled: queryEnabled,
  });

  // 폴더 리스트 가져오기 API 요청
  const { data: folderData, isLoading: isFolderLoading } = useQuery<Folder[]>({
    queryKey: ["folders"],
    queryFn: getFolder,
    enabled: queryEnabled,
  });
  const folderList = folderData || [];

  // 폴더 클릭 시 링크 리스트 변경
  const { data: folderLinksData } = useQuery<LinksByIdResponse>({
    queryKey: ["folderLinks", currentFolder?.id],
    queryFn: () => {
      if (!currentFolder) {
        return Promise.resolve({ list: [], totalCount: 0 } as LinksByIdResponse);
      }
      return getLinksById(currentFolder.id);
    },
    enabled: !!currentFolder,
  });

  // 폴더 클릭 로직
  const handleFolderClick = (folderId: number, folderName: string) => {
    if (folderId === 0) {
      setCurrentFolder(null);
    } else {
      setCurrentFolder({
        id: folderId,
        name: folderName,
        createdAt: new Date().toISOString(),
        linkCount: 0, // API 데이터에서 가져올 수 있음
      });
    }
  };

  // 폴더 필터링 로직
  const linkList = currentFolder ? folderLinksData?.list || [] : linksData?.list || [];
  const filteredLinks = linkList.filter(
    (link) =>
      link.title.toLowerCase().includes(searchLink.toLowerCase()) ||
      link.url.toLowerCase().includes(searchLink.toLowerCase())
  );

  // 폴더 추가 로직
  const queryClient = useQueryClient();
  const handleAddFolderModalClose = () => setIsAddFolderModalOpen(false);
  const handlePostNewFolder = async () => {
    await postFolder(newFolderName); // 새로운 폴더 추가
    await queryClient.invalidateQueries({ queryKey: ["folders"] }); // "folders" 쿼리 무효화
    setIsAddFolderModalOpen(false);
  };

  return (
    <div className="h-auto min-h-screen bg-gray04 px-6 pb-2">
      <div className="flex flex-col items-center justify-center pt-10 md:mx-6">
        {/* 링크 검색 */}
        <SearchLinkPart setSearchLink={setSearchLink} />
        <SeletFolderPart
          folderList={folderList}
          handleFolderClick={handleFolderClick}
          setIsAddFolderModalOpen={setIsAddFolderModalOpen}
          isLoading={isFolderLoading}
        />

        {currentFolder && (
          <div className="my-3 flex w-full max-w-[1200px] items-center justify-between md:mb-10">
            <div className="ml-1 text-3xl font-semibold text-gray02 lg:text-4xl">{currentFolder.name}</div>
            <div className="flex gap-4">
              <ChageFolderNameImage currentFolder={currentFolder} />
              <DeleteFolderImage currentFolder={currentFolder} setCurrentFolder={setCurrentFolder} />
            </div>
          </div>
        )}
      </div>

      {/* 링크 목록 */}
      {(searchLink ? filteredLinks : linkList).length !== 0 ? (
        <div className="align-items-center mx-auto mb-10 grid w-full max-w-[1200px] grid-cols-1 justify-items-center gap-4 px-4 pt-4 sm:grid-cols-2 md:gap-y-8 lg:grid-cols-3 lg:gap-x-10 xl:px-0">
          {(searchLink ? filteredLinks : linkList).map((link) => (
            <LinkItem key={link.id} link={link} />
          ))}
        </div>
      ) : (
        <NoLinks />
      )}

      {isAddFolderModalOpen && (
        <CommonModal
          title="FolderName"
          inputPlaceholder="Please Enter folder name"
          buttonText="Add"
          onClose={handleAddFolderModalClose}
          onSubmit={handlePostNewFolder}
          inputValue={newFolderName}
          setInputValue={setNewFolderName}
        />
      )}
    </div>
  );
}
