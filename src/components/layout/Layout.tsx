import AddLink from "../AddLink";
import Header from "../Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="relative flex w-full flex-col items-center justify-center px-6">
        <img
          src="/layout_bg.webp"
          alt="배경 이미지"
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <Header />
        <div className="mb-8 flex h-[80px] w-full items-center justify-center md:h-[120px]">
          <AddLink />
        </div>
      </div>
      <Outlet />
    </>
  );
}
