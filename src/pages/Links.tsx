import { useEffect, useState } from "react";

import AddFolderModal from "../components/AddFolderModal";
import AddLink from "../components/AddLink";
import Folder from "../components/folder";
import Header from "../components/Header";
import LinkItem from "../components/LinkItem";
import Pagination from "../components/Pagination";
import { getFolder } from "../api/folder";
import { getLinks } from "../api/links";

export default function Links() {
  // 링크리스트 가져오기 api 요청
  const [linkList, setLinkList] = useState([]);
  useEffect(() => {
    const fetchLinkList = async () => {
      try {
        const response = await getLinks();
        setLinkList(response.list);
        console.log(response.list);
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

  const [isAddFolderOpen, setIsAddFolderOpen] = useState(false);

  return (
    <>
      <div className="flex w-screen flex-col items-center justify-center bg-gray05 px-5">
        <Header />
        <div className="mb-8 flex h-[80px] w-full items-center justify-center px-5 md:h-[120px]">
          <AddLink folderList={folderList} />
        </div>
      </div>
      <div className="mx-6 mt-5 flex flex-col items-center justify-center">
        <input
          className="w-full max-w-[1200px] rounded-xl bg-slate-200 px-5 py-3 text-xl"
          placeholder="🔎 링크를 검색해보세요"
        />
        <div className="my-6 flex w-full max-w-[1200px] justify-between">
          <div className="flex gap-4">
            {folderList.map((folder) => (
              <Folder folderName={folder.name} key={folder.id} />
            ))}
          </div>
          <img
            src="/addFolderText.svg"
            width={90}
            className="cursor-pointer"
            onClick={() => setIsAddFolderOpen(!isAddFolderOpen)}
          />
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-x-24 gap-y-10 px-6 md:grid-cols-3">
        {linkList.map((link) => (
          <LinkItem link={link} />
        ))}
      </div>

      <div className="mx-auto mb-16 mt-12 flex w-full max-w-[1200px] justify-center gap-2">
        <Pagination text={"<"} />
        <Pagination text={">"} />
      </div>

      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center">
        <img src="/noLinks.svg" width={300} />
        <p className="-mt-4 text-3xl text-primary">저장된 링크가 없습니다 </p>
      </div>
      {isAddFolderOpen && <AddFolderModal setIsAddFolderOpen={setIsAddFolderOpen} />}
    </>
  );
}
