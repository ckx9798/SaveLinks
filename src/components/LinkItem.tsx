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
import { ClipLoader } from "react-spinners";
import CommonModal from "./Modal/CommonModal";
import LinkDropdown from "./LinkDropdown";
import { LinkItemProps } from "../type/link";
import { TiStarFullOutline } from "react-icons/ti";
import { createPortal } from "react-dom";
import isValidUrl from "../utils/isValidUrl";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function LinkItem({ link }: LinkItemProps) {
  const [eachLink, setEachLink] = useState(link);
  const [loading, setLoading] = useState(true);

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
  console.log(isEditModalOpen);
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
    <div className="relative overflow-hidden rounded-xl border-gray04 border-transparent bg-gray01 transition-all hover:scale-[1.02] hover:border-2 hover:border-primary">
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-70">
          <ClipLoader color="#60a5fa" size={50} />
        </div>
      )}
      <a href={normalizeUrl(link.url)} target="_blank">
        <div className="relative h-[380px] w-full overflow-hidden shadow-xl md:h-[420px] xl:h-[480px]">
          {/* 즐겨찾기 아이콘 */}
          <TiStarFullOutline
            className={`absolute right-1 top-1 text-3xl ${eachLink.favorite ? "text-yellow-300" : "text-slate-400"}`}
            onClick={handleFavoriteClick}
          />
          {/* 이미지 or Instagram Reels iframe or fallback */}
          <div className="h-3/5">
            {isInstagramReel(link.url) ? (
              // 인스타
              <iframe
                src={`https://www.instagram.com/reel/${extractInstagramId(normalizeInstagramUrl(link.url))}/embed`}
                className="h-full w-full object-cover"
                allow="autoplay; encrypted-media"
                allowFullScreen
                onLoad={() => setLoading(false)}
                style={{ visibility: loading ? "hidden" : "visible" }}
              />
            ) : isYoutube(link.url) ? (
              // 유튜브
              <iframe
                src={normalizeYoutubeUrl(link.url)}
                className="h-full w-full object-cover"
                allow="autoplay; encrypted-media"
                allowFullScreen
                onLoad={() => setLoading(false)}
                style={{ visibility: loading ? "hidden" : "visible" }}
              />
            ) : isValidImage(link.imageSource) ? (
              // 일반
              <img
                src={link.imageSource}
                className={"h-full w-full object-cover"}
                onLoad={() => setLoading(false)}
                style={{ visibility: loading ? "hidden" : "visible" }}
              />
            ) : (
              // no 이미지
              <img
                src="/link.svg"
                className={"h-full w-full p-12"}
                onLoad={() => setLoading(false)}
                style={{ visibility: loading ? "hidden" : "visible" }}
              />
            )}
          </div>
          {/* 내용 영역 */}
          <div className="flex h-2/5 flex-col justify-between px-4 py-2">
            <div className="relative flex justify-between">
              {/* 제목 */}
              <p className="my-1 line-clamp-1 font-semibold text-blue-300 md:text-2xl">{eachLink.title}</p>

              {/* 케밥 메뉴 아이콘 */}
              <img src="/kebab.svg" onClick={handleDropdownClick} className="mx-4 w-4 cursor-pointer md:w-8" />

              {/* 드롭다운 메뉴 */}
              {isDropdownOpen && (
                <LinkDropdown
                  linkId={link.id}
                  setIsEditModalOpen={setIsEditModalOpen}
                  setIsDeleteModalOpen={setIsDeleteModalOpen}
                  setIsDropdownOpen={setIsDropdownOpen}
                />
              )}
            </div>

            {/* 설명 */}
            <h2 className="overflow-y-auto whitespace-pre-line text-xl md:my-2 md:text-2xl md:font-medium">
              {/* md:min-h-[64px] */}
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
    </div>
  );
}
