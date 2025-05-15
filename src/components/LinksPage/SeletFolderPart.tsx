import Folder from "../Folder";
import { SeletFolderPartProps } from "../../type/link";

export default function SeletFolderPart({
  folderList,
  handleFolderClick,
  setIsAddFolderModalOpen,
  isLoading,
}: SeletFolderPartProps) {
  if (isLoading) {
    return <div>Loading folders...</div>;
  }
  // 전체 폴더를 포함한 새로운 리스트 생성
  const modifiedFolderList = [{ id: 0, name: "전체" }, ...(folderList ?? [])];

  return (
    <div className="my-3 flex w-full max-w-[1400px] justify-between md:my-6">
      <div className="mt-3 flex w-full items-start justify-between gap-2">
        {/* 폴더 리스트 */}
        <div className="flex flex-wrap gap-2 md:gap-4">
          {modifiedFolderList.map((folder) => (
            <Folder
              folderName={folder.name}
              key={folder.id}
              onClick={() => handleFolderClick(folder.id, folder.name)}
            />
          ))}
        </div>

        {/*폴더 추가 버튼 */}
        <button
          className="flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-secondary px-4 sm:py-1 md:text-2xl lg:rounded-full"
          onClick={() => setIsAddFolderModalOpen((prev) => !prev)}
        >
          <span className="text-3xl">+</span>
          <span className="ml-2 hidden lg:block">Add Folder</span>
        </button>
      </div>
    </div>
  );
}
