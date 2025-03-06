import { Link, LinkResponse } from "../type/link";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import LinkItem from "../components/LinkItem";
import NoLinks from "../components/NoLinks";
import { getFavorite } from "../api/links";

export default function Favorite() {
  const [favoriteList, setFavoriteList] = useState<Link[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: LinkResponse = await getFavorite();
        setFavoriteList(response.list);
      } catch (error) {
        console.error("fetchData 에러", error);
      }
    };
    fetchData();
  }, []);

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
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-x-24 gap-y-10 px-6 md:grid-cols-3">
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
