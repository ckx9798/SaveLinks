import AddLink from "../components/AddLink";
import Folder from "../components/folder";
import Header from "../components/Header";
import LinkItem from "../components/Link";
import Pagination from "../components/Pagination";

export default function Links() {
  return (
    <>
      <div className="flex w-screen flex-col items-center justify-center bg-gray05 px-5">
        <Header />
        <div className="mb-8 flex h-[80px] w-full items-center justify-center px-5 md:h-[120px]">
          <AddLink />
        </div>
      </div>
      <div className="mx-6 mt-5 flex flex-col items-center justify-center">
        <input
          className="w-full max-w-[1200px] rounded-xl bg-slate-200 px-5 py-3 text-xl"
          placeholder="🔎 링크를 검색해보세요"
        />
        <div className="m-5 mx-auto flex w-full max-w-[1200px] gap-3">
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

      <div className="mx-auto mb-16 mt-12 flex w-full max-w-[1200px] justify-center gap-2">
        <Pagination text={"<"} />
        <Pagination text={">"} />
      </div>

      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center">
        <img src="/noLinks.svg" width={300} />
        <p className="-mt-4 text-3xl text-primary">저장된 링크가 없습니다 </p>
      </div>
    </>
  );
}
