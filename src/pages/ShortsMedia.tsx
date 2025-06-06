import AddShorts from "../components/Shorts/AddShorts";
import Header from "../components/Header";
import MotionChatButton from "../components/Chat/MotionChatButton";
import ShortsItem from "../components/Shorts/ShortsItem";
import { getShortsLink } from "../api/shorts";
import { useQuery } from "@tanstack/react-query";

export default function ShortsMedia() {
  const { data: shortsData = [] } = useQuery({
    queryKey: ["shorts"],
    queryFn: getShortsLink,
  });

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
          {shortsData.map((link) => (
            <ShortsItem key={link.id} link={link} />
          ))}
        </div>
      </div>
      <MotionChatButton />
    </>
  );
}
