import { TiStarFullOutline } from "react-icons/ti";
import { UserFavoriteLinksProps } from "../type/components";

export default function UserFavoriteLinks({ onClick }: UserFavoriteLinksProps) {
  return (
    <div className="flex cursor-pointer items-center gap-2 rounded-xl border border-logo px-3" onClick={onClick}>
      <div className="rounded-full bg-inherit">
        <TiStarFullOutline className="text-2xl text-yellow-300" />
      </div>
      <p className="text-2xl text-blue-500">save</p>
    </div>
  );
}
