import ChangeDate from "../utils/ChangeDate";
import { TiStarFullOutline } from "react-icons/ti";
import { putFavorite } from "../api/links";
import { useState } from "react";

export default function LinkItem({ link }) {
  // 서버 url
  const linkSource = link.imageSource || "/link.svg";
  const linkSourceClass =
    linkSource === "/link.svg" ? "h-[130px] md:h-3/5 w-full" : "h-[130px] md:h-3/5 w-full object-cover";

  // url 로직 통일
  const nomalizeUrl = (url) => {
    return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
  };

  const [eachLink, setEachLink] = useState(link); // 'linked' 상태로 link 객체를 관리

  // 즐겨찾기 변경 로직
  const handleFavoriteClick = async (e) => {
    e.preventDefault();
    try {
      // 서버에 현재 favorite 상태의 반대값을 전송
      await putFavorite(eachLink.id, eachLink.favorite);

      // 상태 업데이트
      setEachLink((prevLink) => ({
        ...prevLink,
        favorite: !prevLink.favorite, // favorite 값을 반전
      }));
    } catch (error) {
      console.error("즐겨찾기 업데이트 중 오류 발생:", error);
    }
  };

  return (
    <a href={nomalizeUrl(link.url)} target="_blank">
      <div className="relative h-[260px] w-full overflow-hidden rounded-xl shadow-xl md:h-[440px] md:max-w-[400px] lg:max-w-[340px]">
        {eachLink.favorite ? (
          <TiStarFullOutline
            className="absolute right-1 top-1 text-3xl text-yellow-300"
            onClick={handleFavoriteClick}
          />
        ) : (
          <TiStarFullOutline className="absolute right-1 top-1 text-3xl text-slate-400" onClick={handleFavoriteClick} />
        )}

        <img src={linkSource} className={linkSourceClass} />
        <div className="flex flex-col px-4 py-2">
          <div className="flex justify-between">
            <p className="my-1 line-clamp-1 font-semibold text-blue-300 md:text-2xl">{eachLink.title}</p>
            <img src="/kebab.svg" />
          </div>
          <h2 className="my-1 line-clamp-2 text-xl leading-6 md:my-2 md:text-2xl md:font-medium">{link.description}</h2>
          <p className="text-lg md:text-xl">{ChangeDate(link.createdAt)}</p>
        </div>
      </div>
    </a>
  );
}
