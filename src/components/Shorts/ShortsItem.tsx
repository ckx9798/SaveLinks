import ShortsDropddown from "./ShortsDropdown";
import { ShortsItemProps } from "../../type/shorts";
import { useState } from "react";

export default function ShortsItem({ link }: ShortsItemProps) {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  return (
    <div key={link.id} className="group relative aspect-[2/3] w-full xl:max-w-[460px]">
      <iframe
        src={link.url.startsWith("http") ? link.url : `https://${link.url}`}
        className="aspect-[2/3] h-auto w-full rounded-xl hover:border-2 hover:border-primary md:min-h-[635px]"
        allow="autoplay; encrypted-media"
        allowFullScreen
        scrolling="no"
        loading="lazy"
      />
      <button
        className="absolute bottom-0 right-0 z-10 hidden rounded-md px-4 py-1 text-white shadow-md group-hover:block group-hover:bg-primary"
        onClick={() => setOpenDropdownId((prevId) => (prevId === link.id ? null : link.id))}
      >
        . . .
      </button>

      {openDropdownId === link.id && <ShortsDropddown link={link} setOpenDropdownId={setOpenDropdownId} />}
    </div>
  );
}
