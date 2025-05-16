import { Suspense, lazy } from "react";

import UserFavoriteLinks from "./UserFavoriteLinks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const moveToLinks = () => navigate("/links");
  const moveToMemos = () => navigate("/memos");
  const moveToShorts = () => {
    navigate("/shorts");
    window.location.reload();
  };
  const moveToFavorite = () => navigate("/favorite");
  const handleLogout = () => {
    document.cookie =
      "access|token=; " +
      "path=/; " +
      "domain=www.savelinks.xyz; " +
      "SameSite=Strict; " +
      "expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    document.cookie = "token=; path=/; domain=www.savelinks.xyz; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    navigate("/login");
  };

  const UserDropdown = lazy(() => import("./Modal/UserDropdown"));

  return (
    <div className="relative my-4 flex h-[65px] w-full max-w-[1400px] items-center justify-between md:my-6">
      <img
        src="/saveLinks_logo.webp"
        onClick={moveToLinks}
        className="-ml-10 cursor-pointer md:-ml-6"
        width={200}
        loading="eager"
        fetchPriority="high"
      />
      <div className="flex gap-2 md:gap-4">
        <UserFavoriteLinks onClick={moveToFavorite} />
        <div className="relative flex items-center">
          <div className="cursor-pointer rounded-full bg-gray01 p-1">
            <img src="/user_circle.svg" alt="" width={24} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
          {isMenuOpen && (
            <Suspense>
              <UserDropdown
                onClose={() => setIsMenuOpen(false)}
                onLinkClick={moveToLinks}
                onMemoClick={moveToMemos}
                onShortsClick={moveToShorts}
                onLogoutClick={handleLogout}
              />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}
