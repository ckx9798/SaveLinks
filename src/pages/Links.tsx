import { Link, LinkResponse, LinksByIdResponse } from "../type/link";
import { getLinks, getLinksById } from "../api/links";
import { useEffect, useState } from "react";

import AddFolderModal from "../components/Modal/AddFolderModal";
import AddLink from "../components/AddLink";
import ChageFolderNameImage from "../components/Folder/ChageFolderNameImage";
import DeleteFolderImage from "../components/Folder/DeleteFolderImage";
import { Folder } from "../type/folder";
import Header from "../components/Header";
import LinkItem from "../components/LinkItem";
import NoLinks from "../components/NoLinks";
import SearchLinkPart from "../components/LinksPage/SerchLinkPart";
import SeletFolderPart from "../components/LinksPage/SeletFolderPart";
import { getFolder } from "../api/folder";

export default function Links() {
  const [linkList, setLinkList] = useState<Link[]>([]); // 링크 리스트 상태
  const [folderList, setFolderList] = useState<Folder[]>([]); // 폴더 리스트 상태
  const [currentFolder, setCurrentFolder] = useState<Folder | null>(null); // 현재 선택된 폴더
  const [isAddFolderOpen, setIsAddFolderOpen] = useState<boolean>(false); // 폴더 추가 모달 상태
  const [searchLink, setSearchLink] = useState<string>(""); // 검색어 상태

  // 링크 리스트 가져오기 API 요청
  useEffect(() => {
    const fetchLinkList = async () => {
      try {
        const response: LinkResponse = await getLinks();
        setLinkList(response.list);
      } catch (error) {
        console.error("fetchLinkList 에러", error);
      }
    };
    fetchLinkList();
  }, []);

  // 폴더 리스트 가져오기 API 요청
  useEffect(() => {
    const fetchFolderList = async () => {
      try {
        const response: Folder[] = await getFolder();
        setFolderList(response);
      } catch (error) {
        console.error("fetchFolderList 에러", error);
      }
    };
    fetchFolderList();
  }, []);

  // 폴더 클릭 시 링크 리스트 변경
  const handleFolderClick = async (folderId: number, folderName: string) => {
    try {
      const fetchLinks: LinksByIdResponse = await getLinksById(folderId);
      setLinkList(fetchLinks.list);
      setCurrentFolder({
        id: folderId,
        name: folderName,
        createdAt: new Date().toISOString(),
        linkCount: fetchLinks.list.length,
      });
    } catch (error) {
      console.error("handleFolderClick 에러", error);
    }
  };

  // 검색 필터링된 링크 리스트
  const filteredLinks = linkList.filter(
    (link) =>
      link.title.toLowerCase().includes(searchLink.toLowerCase()) ||
      link.url.toLowerCase().includes(searchLink.toLowerCase())
  );

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center bg-gray05 px-3">
        <Header />
        <div className="mb-8 flex h-[80px] w-full items-center justify-center md:h-[120px]">
          <AddLink folderList={folderList} />
        </div>
      </div>
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
        <div className="align-items-center mx-auto mb-10 grid w-full max-w-[1200px] grid-cols-2 justify-items-center gap-x-4 gap-y-6 px-3 md:grid-cols-2 md:gap-y-12 md:px-6 lg:grid-cols-3 lg:gap-x-20 lg:px-0">
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
