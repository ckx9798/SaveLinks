import { SearchLinkPartProps } from "../../type/link";

export default function SearchLinkPart({ setSearchLink }: SearchLinkPartProps) {
  return (
    <div className="flex w-full max-w-[1200px] items-center gap-2 rounded-xl border-2 border-primary bg-gray01 px-2 py-2">
      <span>🔎</span>
      <input
        placeholder=" Please search for the link"
        className="rounded-x w-full max-w-[1400px] bg-gray01 px-2 text-xl focus:outline-none"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchLink(e.target.value)}
      />
    </div>
  );
}
