import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex w-screen flex-col items-center justify-center bg-gray05 pt-10">
        <div className="flex w-full max-w-[1200px] items-center justify-between">
          <img src="/savelinks.svg" onClick={() => navigate("links")} />
          <Button size="xs" text="로그인" onClick={() => navigate("login")}></Button>
        </div>
        <div className="mt-20 flex flex-col items-center">
          <img src="/linkInfo.svg" width={600} />
          <img src="/homeImg.svg" width={1000} />
        </div>
      </div>

      <div className="flex w-full items-center justify-center bg-white py-20">
        <div className="flex max-w-[1000px] items-center gap-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              <span className="text-red-400">원하는 </span>
              <span className="text-purple-400">링크</span>를 <br />
              저장하세요
            </h2>
            <p className="mt-4 text-gray-500">
              나중에 읽고 싶은 글, 다시 보고 싶은 영상,
              <br />
              사고 싶은 옷, 기억하고 싶은 모든 것을
              <br />한 공간에 저장하세요.
            </p>
          </div>
          <div className="relative flex-1 overflow-visible">
            <div>
              <img src="/homeLinks.jpg" width={800} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center bg-white py-20">
        <div className="flex max-w-[1000px] items-center gap-10">
          <div className="relative flex-1 overflow-visible">
            <div>
              <img src="/homeSelectFolder.jpg" width={800} height={300} />
            </div>
          </div>
          <div className="mr-20">
            <h2 className="text-4xl font-bold text-gray-800">
              <span>링크를</span>
              <span className="text-red-400"> 폴더로 관리</span>
              <span>하세요</span>
            </h2>
            <p className="mt-4 text-gray-500">
              여러 링크를 폴더에 담아서 관리할 수 있습니다.
              <br />
              다양한 링크를 원하는 폴더에 담아보세요
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center bg-white py-20">
        <div className="flex max-w-[1000px] items-center gap-10">
          <div className="mr-20">
            <h2 className="text-4xl font-bold text-gray-800">
              <span className="text-red-400">간단한 메모</span>
              <span>를 작성해보세요</span>
            </h2>
            <p className="mt-4 text-gray-500">
              손쉽게 메모를 생성하고
              <br />
              수정하고 삭제해보세요
            </p>
          </div>
          <div className="relative flex-1 overflow-visible">
            <div>
              <img src="/homeMemo.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
