import { DeleteLinkUrl, EditLinkUrl, putFavorite } from "../api/links";
import {
  extractInstagramId,
  isInstagramReel,
  isValidImage,
  isYoutube,
  normalizeUrl,
  normalizeYoutubeUrl,
} from "../utils/urlUtils";

import ChangeDate from "../utils/ChangeDate";
import CommonModal from "./Modal/CommonModal";
import { LinkItemProps } from "../type/link";
import LinksDropdown from "./LinkDropdown";
import { TiStarFullOutline } from "react-icons/ti";
import isValidUrl from "../utils/isValidUrl";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function LinkItem({ link }: LinkItemProps) {
  const linkSource = isValidImage(link.imageSource) ? link.imageSource : "/link.svg"; // 기본 이미지 설정
  const linkSourceClass =
    linkSource === "/link.svg"
      ? "h-[130px] md:h-3/5 w-full p-6 md:p-12 lg:p-14"
      : "h-[130px] md:h-3/5 w-full object-cover";

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

  // 링크 수정 로직
  const [newLink, setNewLink] = useState<string>("");
  const handleEditModalClose = (): void => {
    setIsEditModalOpen((prev) => !prev);
  };
  const queryClient = useQueryClient();
  const sendEditLinkRequest = async (): Promise<void> => {
    if (!isValidUrl(newLink)) {
      toast.error("URL 형식이 올바르지 않습니다");
      return;
    }

    try {
      await EditLinkUrl(link.id, newLink);
      await queryClient.invalidateQueries({ queryKey: ["links"] }); // "links" 쿼리 무효화

      setEachLink((prevLink) => ({
        ...prevLink,
        url: newLink,
        title: newLink,
      }));

      setNewLink("");
      setIsEditModalOpen(false);
      setIsDropdownOpen(false);
    } catch (error) {
      console.error("폴더명 수정 중 오류", error);
    }
  };

  // 링크 삭제 로직
  const handleDeleteModalClose = (): void => {
    setIsDeleteModalOpen(false);
  };
  const sendDeleteRequest = async (): Promise<void> => {
    try {
      await DeleteLinkUrl(link.id);
      await queryClient.invalidateQueries({ queryKey: ["links"] }); // "links" 쿼리 무효화
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("링크 삭제 중 오류", error);
    }
  };

  function normalizeInstagramUrl(url: string): string {
    const isReel = /instagram\.com\/reel\/[^/?]+\/?$/.test(url);
    if (isReel && !url.includes("utm_source")) {
      return url.endsWith("/") ? `${url}?utm_source=ig_web_copy_link` : `${url}/?utm_source=ig_web_copy_link`;
    }
    return url;
  }

  return (
    <>
      <a
        href={normalizeUrl(link.url)}
        target="_blank"
        className="overflow-hidden rounded-xl border-gray04 border-transparent bg-gray01 transition-all hover:scale-[1.02] hover:border-2 hover:border-primary"
      >
        <div className="relative h-[260px] w-[160px] overflow-hidden shadow-xl hover:scale-105 sm:w-[280px] md:h-[440px] md:w-[380px] lg:h-[700px] lg:w-[360px]">
          {/* 즐겨찾기 아이콘 */}
          <TiStarFullOutline
            className={`absolute right-1 top-1 text-3xl ${eachLink.favorite ? "text-yellow-300" : "text-slate-400"}`}
            onClick={handleFavoriteClick}
          />

          {/* 이미지 or Instagram Reels iframe or fallback */}
          {isInstagramReel(link.url) ? (
            <iframe
              src={`https://www.instagram.com/reel/${extractInstagramId(normalizeInstagramUrl(link.url))}/embed`}
              className="h-full w-full object-cover"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : isYoutube(link.url) ? (
            <iframe
              src={normalizeYoutubeUrl(link.url)}
              className="h-full w-full object-cover"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : isValidImage(link.imageSource) ? (
            <img src={link.imageSource} className={linkSourceClass} />
          ) : (
            <img src="/link.svg" className={linkSourceClass} />
          )}

          {/* 내용 영역 */}
          <div className="flex flex-col px-4 py-2">
            <div className="relative flex justify-between">
              {/* 제목 */}
              <p className="my-1 line-clamp-1 font-semibold text-blue-300 md:text-2xl">{eachLink.title}</p>

              {/* 케밥 메뉴 아이콘 */}
              <img src="/kebab.svg" onClick={handleDropdownClick} className="mx-4 w-4 cursor-pointer md:w-8" />

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
      {isEditModalOpen && (
        <CommonModal
          title="Edit Link"
          inputPlaceholder="write New Link URL"
          buttonText="Edit"
          onClose={handleEditModalClose}
          onSubmit={sendEditLinkRequest}
          inputValue={newLink}
          setInputValue={setNewLink}
        />
      )}
      {isDeleteModalOpen && (
        <CommonModal
          title="Delete this Link?"
          buttonText="Delete"
          onClose={handleDeleteModalClose}
          onSubmit={sendDeleteRequest}
          showInput={false}
          buttonColor="gradientRed"
        />
      )}
    </>
  );
}
