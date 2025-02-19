import ChangeDate from "../utils/ChangeDate";
import LinkDeleteDropdownModal from "./Modal/LinkDeleteDropdownModal";
import LinkEditDropdownModal from "./Modal/LinkEditDropdownModal";
import LinksDropdown from "./LinkDropdown";
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

  // 드롭다운
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdownClick = (e) => {
    e.preventDefault();
    setIsDropdownOpen((prev) => !prev);
  };

  // 드롭다운 모달
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <>
      <a href={nomalizeUrl(link.url)} target="_blank">
        <div className="relative h-[260px] w-[270px] overflow-hidden rounded-xl shadow-xl hover:scale-110 md:h-[440px] md:w-[400px] lg:w-[340px]">
          {/* 즐겨찾기 아이콘 */}
          <TiStarFullOutline
            className={`absolute right-1 top-1 text-3xl ${eachLink.favorite ? "text-yellow-300" : "text-slate-400"}`}
            onClick={handleFavoriteClick}
          />

          {/* 이미지 */}
          <img src={linkSource} className={linkSourceClass} />

          {/* 내용 영역 */}
          <div className="flex flex-col px-4 py-2">
            <div className="relative flex justify-between">
              {/* 제목 */}
              <p className="my-1 line-clamp-1 font-semibold text-blue-300 md:text-2xl">{eachLink.title}</p>

              {/* 케밥 메뉴 아이콘 */}
              <img src="/kebab.svg" onClick={handleDropdownClick} className="mx-4 cursor-pointer" />

              {/* 드롭다운 메뉴 */}
              {isDropdownOpen && (
                <LinksDropdown
                  linkId={link.Id}
                  setIsEditModalOpen={setIsEditModalOpen}
                  setIsDeleteModalOpen={setIsDeleteModalOpen}
                />
              )}
            </div>

            {/* 설명 */}
            <h2 className="my-1 line-clamp-2 min-h-[48px] text-xl leading-6 md:my-2 md:min-h-[64px] md:text-2xl md:font-medium">
              {link.description}
            </h2>

            {/* 날짜 */}
            <p className="text-lg md:text-xl">{ChangeDate(link.createdAt)}</p>
          </div>
        </div>
      </a>
      {isEditModalOpen && <LinkEditDropdownModal setIsEditModalOpen={setIsEditModalOpen} linkId={link.id} />}
      {isDeleteModalOpen && <LinkDeleteDropdownModal setIsDeleteModalOpen={setIsDeleteModalOpen} linkId={link.id} />}
    </>
  );
}
