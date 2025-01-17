export default function Folder({ folderName }) {
  return (
    <div className="rounded-xl border border-primary px-4 py-1 text-2xl hover:bg-primary hover:text-white">
      {folderName}
    </div>
  );
}
