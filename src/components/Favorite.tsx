import { TiStarFullOutline } from "react-icons/ti";

export default function Favorite() {
  return (
    <div className="border border-logo flex items-center px-3 rounded-xl gap-2">
      <div className="bg-inherit rounded-full">
        <TiStarFullOutline className="text-yellow-300 text-2xl" />
      </div>
      <p className="text-2xl text-blue-500">save</p>
    </div>
  );
}
