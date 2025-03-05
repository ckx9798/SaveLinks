import React from "react";
import { SearchLinkPartProps } from "../../type/link";

export default function SearchLinkPart({ setSearchLink }: SearchLinkPartProps) {
  return (
    <div className="relative flex w-full items-center justify-center">
      <input
        className="w-full max-w-[1200px] rounded-xl bg-slate-200 px-6 py-3 text-xl"
        placeholder="🔎 Please search for the link"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchLink(e.target.value)}
      />
    </div>
  );
}
