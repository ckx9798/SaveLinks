import { getLinks, getLinksById } from "../api/links";
import { useEffect, useState } from "react";

import AddFolderModal from "../components/AddFolderModal";
import AddLink from "../components/AddLink";
import Folder from "../components/folder";
import Header from "../components/Header";
import LinkItem from "../components/LinkItem";
import NoLinks from "../components/NoLinks";
import Pagination from "../components/Pagination";
import { getFolder } from "../api/folder";

export default function Links() {
  // 링크리스트 가져오기 api 요청
  const [linkList, setLinkList] = useState([]);
  useEffect(() => {
    const fetchLinkList = async () => {
      try {
        const response = await getLinks();
        setLinkList(response.list);
      } catch (error) {
        console.error("fetchLinkList 에러", error);
      }
    };
    fetchLinkList();
  }, []);

  // 폴더리스트 가져오기 api 요청
  const [folderList, setFolderList] = useState([]);
  useEffect(() => {
    const fetchFolderList = async () => {
      try {
        const response = await getFolder();
        setFolderList(response.data);
      } catch (error) {
        console.error("fetchFolderList 에러", error);
      }
    };
    fetchFolderList();
  }, []);

  // 폴더 이동 api 요청
  const handleFolderClick = async (folderId) => {
    try {
      const fetchLinks = await getLinksById(folderId);
      setLinkList(fetchLinks.list);
    } catch (error) {
      console.error("handleFolderClick", error);
    }
  };

  const [isAddFolderOpen, setIsAddFolderOpen] = useState(false);

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center bg-gray05 px-3">
        <Header />
        <div className="mb-8 flex h-[80px] w-full items-center justify-center md:h-[120px]">
          <AddLink folderList={folderList} />
        </div>
      </div>
      <div className="mx-3 mt-5 flex flex-col items-center justify-center md:mx-6">
        <div className="relative flex w-full items-center justify-center">
          <input
            className="w-full max-w-[1200px] rounded-xl bg-slate-200 px-6 py-3 text-xl/9"
            placeholder="🔎 Please search for the link"
          />
        </div>
        <div className="my-6 mb-6 flex w-full max-w-[1200px] justify-between md:mb-10">
          <div className="flex gap-2 md:gap-4">
            {folderList.map((folder) => (
              <Folder folderName={folder.name} key={folder.id} onClick={() => handleFolderClick(folder.id)} />
            ))}
          </div>
          <img
            src="/addFolderText.svg"
            width={90}
            className="hidden cursor-pointer md:block"
            onClick={() => setIsAddFolderOpen(!isAddFolderOpen)}
          />
        </div>
      </div>
      {linkList.length !== 0 ? (
        <div className="align-items-center mx-auto grid w-full max-w-[1200px] grid-cols-2 justify-items-center gap-x-4 gap-y-6 px-3 md:grid-cols-2 md:gap-y-12 md:px-6 lg:grid-cols-3 lg:gap-x-20 lg:px-0">
          {linkList.map((link) => (
            <LinkItem link={link} />
          ))}
        </div>
      ) : (
        <NoLinks />
      )}

      <div className="mx-auto mb-16 mt-12 flex w-full max-w-[1200px] justify-center gap-2">
        <Pagination text={"<"} />
        <Pagination text={">"} />
      </div>

      {isAddFolderOpen && <AddFolderModal setIsAddFolderOpen={setIsAddFolderOpen} />}
    </>
  );
}
