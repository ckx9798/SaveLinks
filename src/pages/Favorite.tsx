import { Link, LinkResponse } from "../type/link";

import Header from "../components/Header";
import LinkItem from "../components/LinkItem";
import NoLinks from "../components/NoLinks";
import { getFavorite } from "../api/links";
import { useQuery } from "@tanstack/react-query";

export default function Favorite() {
  const { data: favoriteData } = useQuery<LinkResponse>({
    queryKey: ["favoriteLinks"],
    queryFn: getFavorite,
  });

  // ✅ `useState` 없이 데이터를 바로 사용
  const favoriteList: Link[] = favoriteData?.list || [];

  return (
    <>
      <div className="flex w-screen flex-col items-center justify-center bg-gray05 px-5">
        <Header />
        <div className="mb-8 flex h-[80px] w-full items-center justify-center px-5 md:h-[120px]">
          <div className="line flex rounded-full px-7 py-3 text-6xl text-yellow-300">Favorite Links</div>
        </div>
      </div>
      <div className="mx-6 mt-6 flex flex-col items-center justify-center"></div>
      {favoriteList.length !== 0 ? (
        <div className="align-items-center mx-auto mb-10 grid w-full max-w-[1200px] grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
          {favoriteList.map((link) => (
            <LinkItem link={link} key={link.id} />
          ))}
        </div>
      ) : (
        <NoLinks />
      )}
    </>
  );
}
