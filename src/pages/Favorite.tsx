import { Link, LinkResponse } from "../type/link";

import LinkItem from "../components/LinkItem";
import NoLinks from "../components/NoLinks";
import { getFavorite } from "../api/links";
import { useQuery } from "@tanstack/react-query";

export default function Favorite() {
  const { data: favoriteData } = useQuery<LinkResponse>({
    queryKey: ["favoriteLinks"],
    queryFn: getFavorite,
  });

  const favoriteList: Link[] = favoriteData?.list || [];

  return (
    <div className="h-screen bg-gray04">
      {favoriteList.length !== 0 ? (
        <div className="align-items-center mx-auto mb-10 grid w-full max-w-[1200px] grid-cols-1 justify-items-center pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
          {favoriteList.map((link) => (
            <LinkItem link={link} key={link.id} />
          ))}
        </div>
      ) : (
        <NoLinks />
      )}
    </div>
  );
}
