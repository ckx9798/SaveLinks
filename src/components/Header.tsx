import { FaUserCircle } from "react-icons/fa";
import Favorite from "./Favorite";

export default function Header() {
  return (
    <div className="w-full max-w-[1200px] h-[65px] flex justify-between items-center bg-gray05 my-4 px-2 md:px-8 md:my-6">
      <img src="/savelinks.svg" />
      <div className="flex gap-4">
        <Favorite />
        <div className="bg-logo p-1 rounded-full">
          <FaUserCircle className="text-white text-3xl" />
        </div>
      </div>
    </div>
  );
}
