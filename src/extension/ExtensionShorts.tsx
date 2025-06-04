import { useEffect, useState } from "react";

import { ClipLoader } from "react-spinners";
import ExtensionDropdown from "./ExtensionDropdown";
import ExtensionErrorLink from "./ExtensionErrorLink";
import { ExtensionShortsProps } from "../type/extension";
import { normalToEmbedUrlSingle } from "../utils/normalToEmbedUrl";

export default function ExtensionShorts({ shortsObj }: ExtensionShortsProps) {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  const originalEmbedUrl = shortsObj.embedUrl;
  const isOriginalEmbed = originalEmbedUrl.includes("embed");

  const convertedUrl = normalToEmbedUrlSingle(shortsObj.url);
  const isConvertedEmbed = convertedUrl.includes("embed");

  useEffect(() => {
    if (!isOriginalEmbed && !isConvertedEmbed) {
      setLoaded(true);
    }
  }, [isOriginalEmbed, isConvertedEmbed]);

  const finalUrl = isOriginalEmbed ? originalEmbedUrl : convertedUrl;

  return (
    <div className="group relative aspect-[2/3] w-full xl:max-w-[460px]" onMouseLeave={() => setOpenDropdownId(null)}>
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-gray03">
          <ClipLoader color="#36d7b7" size={48} />
        </div>
      )}

      {isOriginalEmbed || isConvertedEmbed ? (
        <iframe
          src={finalUrl}
          className="aspect-[2/3] h-auto w-full rounded-xl hover:border-2 hover:border-primary md:min-h-[635px]"
          allow="autoplay; encrypted-media"
          allowFullScreen
          scrolling="no"
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
      ) : (
        <ExtensionErrorLink shortsObj={shortsObj} />
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
