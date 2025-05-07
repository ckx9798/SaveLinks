import { normalizeUrl, normalizeYoutubeUrl } from "../utils/urlUtils";
import { useEffect, useState } from "react";

import AddShorts from "../components/Shorts/AddShorts";
import ExtensionShorts from "../extension/ExtensionShorts";
import Header from "../components/Header";
import { normalToEmbedUrl } from "../utils/normalToEmbedUrl";
import { useNomalizeUrls } from "../utils/useNomalizeUrls";
import { useSavedUrls } from "../utils/useSavedUrls";

export default function Extension() {
  const savedShorts = useSavedUrls();
  const embedShortsUrl = normalToEmbedUrl(savedShorts);

  return (
    <>
      <div className="relative flex w-full flex-col items-center justify-center px-6">
        <img
          src="/layout_bg.webp"
          alt="배경 이미지"
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <Header />
        <div className="mb-8 flex h-[80px] w-full items-center justify-center md:h-[120px]">
          <AddShorts />
        </div>
      </div>

      <div className="flex h-auto min-h-screen justify-center bg-gray04">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-2 py-6 sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] md:px-8 lg:px-6 xl:px-0">
          {embedShortsUrl.map((link, index) => (
            <ExtensionShorts link={link} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
