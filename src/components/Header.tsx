import { FaUserCircle } from "react-icons/fa";
import UserDropdown from "./Modal/UserDropdown";
import UserFavoriteLinks from "./UserFavoriteLinks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const moveToLinks = () => navigate("/links");
  const moveToFavorite = () => navigate("/favorite");
  const moveToProfile = () => navigate("/todos");
  const handleLogout = () => {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    navigate("/login");
  };

  return (
    <div className="relative my-4 flex h-[65px] w-full max-w-[1200px] items-center justify-between bg-gray05 md:my-6">
      <img src="/savelinks.svg" onClick={moveToLinks} className="cursor-pointer" />
      <div className="flex gap-4">
        <UserFavoriteLinks onClick={moveToFavorite} />
        <div className="relative">
          <div className="rounded-full bg-logo p-1">
            <FaUserCircle className="cursor-pointer text-3xl text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
          {isMenuOpen && (
            <UserDropdown
              onClose={() => setIsMenuOpen(false)}
              onProfileClick={moveToProfile}
              onLogoutClick={handleLogout}
            />
          )}
        </div>
      </div>
    </div>
  );
}
