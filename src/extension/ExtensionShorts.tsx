import { ClipLoader } from "react-spinners";
import ExtensionDropdown from "./ExtensionDropdown";
import { ExtensionShortsProps } from "../type/extension";
import { normalizeInstagramUrl } from "../utils/urlUtils";
import { useState } from "react";

export default function ExtensionShorts({ shortsObj }: ExtensionShortsProps) {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  // embedUrl에 embed가 포함되어 있는지 확인
  const isEmbed = shortsObj.embedUrl.includes("embed");

  return (
    <div className="group relative aspect-[2/3] w-full xl:max-w-[460px]" onMouseLeave={() => setOpenDropdownId(null)}>
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-gray03">
          <ClipLoader color="#36d7b7" size={48} />
        </div>
      )}

      {isEmbed ? (
        <iframe
          src={shortsObj.embedUrl}
          className="aspect-[2/3] h-auto w-full rounded-xl hover:border-2 hover:border-primary md:min-h-[635px]"
          allow="autoplay; encrypted-media"
          allowFullScreen
          scrolling="no"
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
      ) : (
        <iframe
          src={normalizeInstagramUrl(shortsObj.embedUrl)}
          className="h-full w-full object-cover"
          allow="autoplay; encrypted-media"
          allowFullScreen
          onLoad={() => setLoaded(false)}
        />
      )}

      <button
        className="absolute bottom-0 right-0 z-10 hidden rounded-md px-4 py-1 text-white shadow-md group-hover:block group-hover:bg-primary"
        onClick={() => setOpenDropdownId((prevIndex) => (prevIndex === shortsObj.id ? null : shortsObj.id))}
      >
        . . .
      </button>

      {openDropdownId === shortsObj.id && (
        <ExtensionDropdown shortsObj={shortsObj} setOpenDropdownId={setOpenDropdownId} />
      )}
    </div>
  );
}
