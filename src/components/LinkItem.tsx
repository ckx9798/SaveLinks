import ChangeDate from "../utils/ChangeDate";
import { TiStarFullOutline } from "react-icons/ti";

export default function LinkItem({ link }) {
  const linkSource = link.imageSource || "/link.svg";
  const linkSourceClass = linkSource === "/link.svg" ? "h-3/5 w-full" : "h-3/5 w-full object-cover";
  const nomalizeUrl = (url) => {
    return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
  };
  const handleFavoriteClick = (e) => {
    return e.preventDefault();
    console.log(1);
  };

  return (
    <a href={nomalizeUrl(link.url)} target="_blank">
      <div className="relative h-[334px] w-full max-w-[340px] overflow-hidden rounded-xl shadow-xl">
        <img src={linkSource} className={linkSourceClass} />
        <div className="flex flex-col px-4 py-3">
          <div className="flex justify-between">
            <p className="text-gray06">10 minutes ago</p>
            <img src="/kebab.svg" />
          </div>
          <h2 className="my-2 line-clamp-2 text-2xl leading-6">{link.description}</h2>
          <p className="text-xl">{ChangeDate(link.createdAt)}</p>
        </div>
      </div>
    </a>
  );
}
