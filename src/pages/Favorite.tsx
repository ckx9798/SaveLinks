import { Link, LinkResponse } from "../type/link";

import { ClipLoader } from "react-spinners";
import LinkItem from "../components/LinkItem";
import NoLinks from "../components/NoLinks";
import { getFavorite } from "../api/links";
import { useQuery } from "@tanstack/react-query";

export default function Favorite() {
  const { data: favoriteData, isLoading } = useQuery<LinkResponse>({
    queryKey: ["favoriteLinks"],
    queryFn: getFavorite,
  });

  const favoriteList: Link[] = favoriteData?.list || [];

  return (
    <div className="h-screen bg-gray04">
      {isLoading ? (
        <div className="flex h-80 w-full items-center justify-center">
          <ClipLoader color="#60a5fa" size={60} />
        </div>
      ) : favoriteList.length !== 0 ? (
        <div className="align-items-center mx-auto mb-10 grid w-full max-w-[1400px] grid-cols-1 justify-items-center pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
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
