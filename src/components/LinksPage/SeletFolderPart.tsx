import Folder from "../Folder";
import { SeletFolderPartProps } from "../../type/link";

export default function SeletFolderPart({ folderList, handleFolderClick, setIsAddFolderOpen }: SeletFolderPartProps) {
  return (
    <div className="mt-3 flex w-full max-w-[1200px] justify-between md:my-6">
      <div className="flex gap-2 md:gap-4">
        {(folderList ?? []).map((folder) => (
          <Folder folderName={folder.name} key={folder.id} onClick={() => handleFolderClick(folder.id, folder.name)} />
        ))}
      </div>
      <img
        src="/addFolderText.svg"
        width={90}
        className="hidden cursor-pointer md:block"
        onClick={() => setIsAddFolderOpen((prev) => !prev)}
      />
    </div>
  );
}
