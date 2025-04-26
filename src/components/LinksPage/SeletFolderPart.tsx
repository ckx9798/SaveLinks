import Folder from "../Folder";
import { SeletFolderPartProps } from "../../type/link";

export default function SeletFolderPart({ folderList, handleFolderClick, setIsAddFolderOpen }: SeletFolderPartProps) {
  // ✅ "전체" 폴더를 포함한 새로운 리스트 생성
  const modifiedFolderList = [{ id: 0, name: "전체" }, ...(folderList ?? [])];

  return (
    <div className="mt-3 flex w-full max-w-[1200px] justify-between md:my-6">
      <div className="flex gap-2 md:gap-4">
        {modifiedFolderList.map((folder) => (
          <Folder folderName={folder.name} key={folder.id} onClick={() => handleFolderClick(folder.id, folder.name)} />
        ))}
      </div>
      <button
        className="flex items-center rounded-md bg-gray01 px-4 md:rounded-full md:text-2xl"
        onClick={() => setIsAddFolderOpen((prev) => !prev)}
      >
        <span className="text-3xl">+</span>
        <span className="ml-2 hidden md:block">Add Folder</span>
      </button>
    </div>
  );
}
