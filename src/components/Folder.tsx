export default function Folder({ folderName, onClick }) {
  return (
    <div
      className="cursor-pointer rounded-md border border-primary px-2 py-1 hover:bg-primary hover:text-white md:rounded-xl md:px-4 md:py-1 md:text-2xl"
      onClick={onClick}
    >
      {folderName}
    </div>
  );
}
