import AddLink from "../components/AddLink";
import Button from "../components/Button";
import Favorite from "../components/Favorite";
import Folder from "../components/folder";
import Header from "../components/Header";
import LinkItem from "../components/Link";

export default function Links() {
  return (
    <>
      <div className="flex w-screen flex-col items-center justify-center bg-gray05 px-5">
        <Header />
        <div className="mb-8 flex h-[80px] w-full items-center justify-center px-5 md:h-[120px]">
          <AddLink />
        </div>
      </div>
      <div className="mx-6 mt-3 flex flex-col items-center justify-center">
        <input
          className="w-full max-w-[1200px] rounded-xl bg-slate-200 px-5 py-3 text-xl"
          placeholder="🔎 링크를 검색해보세요"
        />
        <div className="m-4 mx-auto flex w-full max-w-[1200px] gap-3">
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-3 gap-x-24 gap-y-10">
        <LinkItem />
        <LinkItem />
        <LinkItem />
        <LinkItem />
        <LinkItem />
        <LinkItem />
      </div>
    </>
  );
}
