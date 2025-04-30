import { UserFavoriteLinksProps } from "../type/components";

export default function UserFavoriteLinks({ onClick }: UserFavoriteLinksProps) {
  return (
    <div
      className="flex h-8 w-8 cursor-pointer items-center justify-center gap-2 rounded-full border border-gray01 bg-gray01 md:h-auto md:w-auto md:px-3"
      onClick={onClick}
    >
      <img src="star.svg" alt="" width={20} />
      <p className="mt-0.5 hidden text-xl md:block md:text-2xl">favorite</p>
    </div>
  );
}
