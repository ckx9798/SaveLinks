import { LinkResponse, LinksByIdResponse } from "../type/link";
import { getLinks, getLinksById } from "../api/links";

import AddFolderModal from "../components/Modal/AddFolderModal";
import ChageFolderNameImage from "../components/Folder/ChageFolderNameImage";
import DeleteFolderImage from "../components/Folder/DeleteFolderImage";
import { Folder } from "../type/folder";
import LinkItem from "../components/LinkItem";
import NoLinks from "../components/NoLinks";
import SearchLinkPart from "../components/LinksPage/SerchLinkPart";
import SeletFolderPart from "../components/LinksPage/SeletFolderPart";
import { getFolder } from "../api/folder";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Links() {
  const [currentFolder, setCurrentFolder] = useState<Folder | null>(null); // 현재 선택된 폴더
  const [isAddFolderOpen, setIsAddFolderOpen] = useState<boolean>(false); // 폴더 추가 모달 상태
  const [searchLink, setSearchLink] = useState<string>(""); // 검색어 상태

  // 링크 리스트 가져오기 API 요청
  const { data: linksData } = useQuery<LinkResponse>({
    queryKey: ["links"],
    queryFn: getLinks,
  });

  // 폴더 리스트 가져오기 API 요청
  const { data: folderData } = useQuery<Folder[]>({
    queryKey: ["folders"],
    queryFn: getFolder,
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

  // 폴더 클릭 여부에 따라 리스트 결정
  const linkList = currentFolder ? folderLinksData?.list || [] : linksData?.list || [];

  // 검색 필터링된 링크 리스트
  const filteredLinks = linkList.filter(
    (link) =>
      link.title.toLowerCase().includes(searchLink.toLowerCase()) ||
      link.url.toLowerCase().includes(searchLink.toLowerCase())
  );

  return (
    <>
      <div className="mx-3 mt-5 flex flex-col items-center justify-center md:mx-6">
        {/* 링크 검색 */}
        <SearchLinkPart setSearchLink={setSearchLink} />
        <SeletFolderPart
          folderList={folderList}
          handleFolderClick={handleFolderClick}
          setIsAddFolderOpen={setIsAddFolderOpen}
        />

        {currentFolder && (
          <div className="my-3 mb-6 flex w-full max-w-[1200px] items-center justify-between md:mb-10">
            <div className="ml-1 text-3xl font-semibold lg:text-4xl">{currentFolder.name}</div>
            <div className="flex gap-4">
              <ChageFolderNameImage currentFolder={currentFolder} />
              <DeleteFolderImage currentFolder={currentFolder} />
            </div>
          </div>
        )}
      </div>

      {/* 링크 목록 */}
      {(searchLink ? filteredLinks : linkList).length !== 0 ? (
        <div className="align-items-center mx-auto mb-10 grid w-full max-w-[1200px] grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-4">
          {(searchLink ? filteredLinks : linkList).map((link) => (
            <LinkItem key={link.id} link={link} />
          ))}
        </div>
      ) : (
        <NoLinks />
      )}

      {isAddFolderOpen && <AddFolderModal setIsAddFolderOpen={setIsAddFolderOpen} />}
    </>
  );
}
