export default function SearchLinkPart({ setSearchLink }) {
  return (
    <div className="relative flex w-full items-center justify-center">
      <input
        className="w-full max-w-[1200px] rounded-xl bg-slate-200 px-6 py-3 text-xl/9"
        placeholder="🔎 Please search for the link"
        onChange={(e) => setSearchLink(e.target.value)}
      />
    </div>
  );
}
