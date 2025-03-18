import ChangeDate from "../utils/ChangeDate";
import LinkDeleteDropdownModal from "./Modal/LinkDeleteDropdownModal";
import LinkEditDropdownModal from "./Modal/LinkEditDropdownModal";
import { LinkItemProps } from "../type/link";
import LinksDropdown from "./LinkDropdown";
import { TiStarFullOutline } from "react-icons/ti";
import { putFavorite } from "../api/links";
import { useState } from "react";

export default function LinkItem({ link }: LinkItemProps) {
  // 응답 이미지 처리
  const isValidImage = (src: string | undefined) => {
    if (!src) return false; // 값이 없으면 false

    // 백엔드에서 오는 잘못된 값 예외처리
    if (src.startsWith("/meta") || src === "/link.svg") return false;

    // 올바른 URL인지 확인 (http:// or https:// 로 시작)
    const isValidURL = /^(https?:\/\/)/.test(src);

    // 이미지 확장자 검증
    const isImageFile = /\.(jpeg|jpg|gif|png|webp|svg)$/i.test(src);

    return isValidURL && isImageFile;
  };

  const linkSource = isValidImage(link.imageSource) ? link.imageSource : "/link.svg"; // 기본 이미지 설정
  const linkSourceClass =
    linkSource === "/link.svg"
      ? "h-[130px] md:h-3/5 w-full p-6 md:p-12 lg:p-14"
      : "h-[130px] md:h-3/5 w-full object-cover";

  // url 로직 통일
  const nomalizeUrl = (url: string) => {
    return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
  };

  const [eachLink, setEachLink] = useState(link);

  // 즐겨찾기 변경 로직
  const handleFavoriteClick = async (e: React.MouseEvent<SVGElement>) => {
    e.preventDefault();
    try {
      await putFavorite(eachLink.id, eachLink.favorite);
      setEachLink((prevLink) => ({
        ...prevLink,
        favorite: !prevLink.favorite,
      }));
    } catch (error) {
      console.error("즐겨찾기 업데이트 중 오류 발생:", error);
    }
  };

  // 드롭다운
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const handleDropdownClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    setIsDropdownOpen((prev) => !prev);
  };

  // 드롭다운 모달
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  return (
    <>
      <a href={nomalizeUrl(link.url)} target="_blank">
        <div className="relative mt-4 h-[260px] w-[300px] overflow-hidden rounded-xl shadow-xl hover:scale-105 sm:w-[300px] md:h-[440px] md:w-[380px] lg:w-[360px]">
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
                  linkId={link.id}
                  setIsEditModalOpen={setIsEditModalOpen}
                  setIsDeleteModalOpen={setIsDeleteModalOpen}
                />
              )}
            </div>

            {/* 설명 */}
            <h2 className="my-1 line-clamp-2 min-h-[48px] text-xl leading-6 md:my-2 md:min-h-[64px] md:text-2xl md:font-medium">
              {link.description || `Move to ${eachLink.title}`}
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
