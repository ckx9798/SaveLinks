import { FaUserCircle } from "react-icons/fa";
import UserFavoriteLinks from "./UserFavoriteLinks";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const moveToLinks = () => navigate("/links");
  const moveToFavorite = () => navigate("/favorite");
  const handleLogout = () => {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"; // 쿠키 만료
    navigate("/login"); // 로그인 페이지 이동
  };
  return (
    <div className="my-4 flex h-[65px] w-full max-w-[1200px] items-center justify-between bg-gray05 md:my-6">
      <img src="/savelinks.svg" onClick={moveToLinks} className="cursor-pointer" />
      <div className="flex gap-4">
        <UserFavoriteLinks onClick={moveToFavorite} />
        <div className="rounded-full bg-logo p-1">
          <FaUserCircle className="cursor-pointer text-3xl text-white" onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
}
