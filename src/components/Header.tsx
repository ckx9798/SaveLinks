import { FaUserCircle } from "react-icons/fa";
import UserFavoriteLinks from "./UserFavoriteLinks";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const moveToLinks = () => navigate("/links");
  const moveToFavorite = () => navigate("/favorite");
  return (
    <div className="my-4 flex h-[65px] w-full max-w-[1200px] items-center justify-between bg-gray05 md:my-6">
      <img src="/savelinks.svg" onClick={moveToLinks} className="cursor-pointer" />
      <div className="flex gap-4">
        <UserFavoriteLinks onClick={moveToFavorite} />
        <div className="rounded-full bg-logo p-1">
          <FaUserCircle className="text-3xl text-white" />
        </div>
      </div>
    </div>
  );
}
