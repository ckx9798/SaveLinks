import { Suspense, lazy } from "react";

import { ExtensionHeaderProps } from "../type/extension";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ExtensionHeader({ maxWidth }: ExtensionHeaderProps) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const moveToHome = () => navigate("/");
  const moveToSingUp = () => navigate("/signup");
  const moveToMemos = () => navigate("/memos");
  const handleLogout = () => {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    navigate("/login");
  };

  const ExtensionUserDropdown = lazy(() => import("./ExtensionUserDropdown"));

  return (
    <div className={`${maxWidth} relative my-4 flex h-[65px] w-full items-center justify-between md:my-6`}>
      <img
        src="/saveLinks_logo.webp"
        alt="메인 로고"
        onClick={moveToHome}
        className="-ml-10 cursor-pointer md:-ml-6"
        width={200}
        loading="eager"
        fetchPriority="high"
      />
      <div className="relative flex items-center">
        <div className="cursor-pointer rounded-full bg-gray01 p-1">
          <img src="/user_circle.svg" alt="" width={24} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
        {isMenuOpen && (
          <Suspense>
            <ExtensionUserDropdown
              onClose={() => setIsMenuOpen(false)}
              onSingUpClick={moveToSingUp}
              onMemoClick={moveToMemos}
              onLogoutClick={handleLogout}
            />
          </Suspense>
        )}
      </div>
    </div>
  );
}
