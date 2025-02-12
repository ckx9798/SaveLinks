export default function SerchLinkPart({ setSerchLink }) {
  return (
    <div className="relative flex w-full items-center justify-center">
      <input
        className="w-full max-w-[1200px] rounded-xl bg-slate-200 px-6 py-3 text-xl/9"
        placeholder="🔎 Please search for the link"
        onChange={(e) => setSerchLink(e.target.value)}
      />
    </div>
  );
}
