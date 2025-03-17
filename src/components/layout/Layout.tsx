import AddLink from "../AddLink";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import { getFolder } from "../../api/folder";
import { useQuery } from "@tanstack/react-query";

export default function Layout() {
  const { data: folderData } = useQuery({ queryKey: ["folders"], queryFn: getFolder });
  const folderList = folderData || [];

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center bg-gray05 px-3">
        <Header />
        <div className="mb-8 flex h-[80px] w-full items-center justify-center md:h-[120px]">
          <AddLink folderList={folderList} />
        </div>
      </div>
      <Outlet />
    </>
  );
}
