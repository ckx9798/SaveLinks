import { UserFavoriteLinksProps } from "../type/components";

export default function UserFavoriteLinks({ onClick }: UserFavoriteLinksProps) {
  return (
    <div
      className="flex cursor-pointer items-center gap-2 rounded-full border border-gray01 px-2 md:px-3"
      onClick={onClick}
    >
      <img src="star.svg" alt="" width={20} />
      <p className="mt-0.5 text-xl text-gray01 md:text-2xl">save</p>
    </div>
  );
}
