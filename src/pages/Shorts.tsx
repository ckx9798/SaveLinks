import { ShortsProps, deleteShortsLink, getShortsLink } from "../api/shorts";
import { useEffect, useState } from "react";

import AddShorts from "../components/Shorts/AddShorts";
import Header from "../components/Header";
import ShortsDropddown from "../components/Shorts/ShortsDropdown";

export default function Shorts() {
  const [shortsLinks, setShortsLinks] = useState<ShortsProps[]>([]);
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  useEffect(() => {
    const fetchgetShortsLink = async () => {
      const data = await getShortsLink();
      setShortsLinks(data);
    };
    fetchgetShortsLink();
  }, [setShortsLinks]);

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
          <AddShorts shortsLinks={shortsLinks} setShortsLinks={setShortsLinks} />
        </div>
        <button className="text-white" onClick={() => deleteShortsLink(37)}>
          asd
        </button>
      </div>

      <div className="flex h-auto min-h-screen justify-center bg-gray04">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 py-6 sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] md:px-8 lg:px-6 xl:px-2">
          {shortsLinks.map((link) => (
            <div key={link.id} className="group relative aspect-[2/3] w-full">
              <iframe
                src={link.url.startsWith("http") ? link.url : `https://${link.url}`}
                className="aspect-[2/3] h-auto w-full rounded-xl hover:border-2 hover:border-primary md:min-h-[635px]"
                allow="autoplay; encrypted-media"
                allowFullScreen
                scrolling="no"
              />
              <button
                className="absolute bottom-0 right-0 z-10 hidden rounded-md px-4 py-1 text-white shadow-md group-hover:block group-hover:bg-primary"
                onClick={() => setOpenDropdownId((prevId) => (prevId === link.id ? null : link.id))}
              >
                . . .
              </button>

              {openDropdownId === link.id && <ShortsDropddown link={link} setOpenDropdownId={setOpenDropdownId} />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
