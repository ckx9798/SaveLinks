import { FolderProps } from "../type/components";

export default function Folder({ folderName, onClick }: FolderProps) {
  return (
    <div
      className="cursor-pointer rounded-md border-2 border-gray01 bg-gray04 px-2 py-1 text-gray01 hover:bg-gray03 hover:text-black md:rounded-xl md:px-4 md:py-1 md:text-2xl"
      onClick={onClick}
    >
      {folderName}
    </div>
  );
}
