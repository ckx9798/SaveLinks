import "aos/dist/aos.css";

import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex h-[550px] w-screen flex-col gap-4 bg-[url(/home_bg.png)] bg-cover md:h-[800px] md:gap-10 lg:h-screen">
        <div className="flex w-full items-center justify-between px-2 pt-4 sm:px-6 md:px-14 md:pt-10 lg:px-28">
          <img src="/savelinks.svg" onClick={() => navigate("links")} />
          <Button size="xs" text="로그인" onClick={() => navigate("login")}></Button>
        </div>

        <div className="flex flex-col items-center justify-center text-white">
          <div>
            <span className="text-3xl font-bold lg:text-7xl">세상의 모든정보</span>
            <span className="text-3xl lg:text-5xl">를</span>
          </div>
          <div>
            <span className="text-3xl lg:text-6xl">쉽게 저장하고 관리해보세요</span>
          </div>
          <button
            className="mt-8 rounded-full bg-white px-8 py-1 text-xl font-medium text-black md:py-2 md:text-2xl lg:mt-12 lg:text-4xl"
            onClick={() => navigate("links")}
          >
            링크 추가하러가기
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center bg-[#FAFAFA] pt-8 md:flex-row">
        <div className="flex flex-col items-center md:min-w-[300px] xl:min-w-[700px]">
          <span className="text-3xl font-medium lg:text-4xl xl:text-5xl"> 원하는 링크를 저장하세요</span>
          <div className="mt-2 flex flex-col items-center text-gray-400 lg:text-xl xl:mt-8 xl:text-3xl">
            <span>나중에 읽고 싶은 글, 다시 보고 싶은 영상,</span>
            <span>사고 싶은 옷, 기억하고 싶은 모든 것을</span>
            <span>한 공간에 저장하세요.</span>
          </div>
        </div>
        <div>
          <img src="/home_1.png" alt="1번 이미지" className="-mt-5" />
        </div>
      </div>

      <div className="flex flex-col items-center bg-[#F5F5F5] pt-8 md:flex-row">
        <div className="order-2 md:order-1">
          <img src="/home_2.png" alt="2번 이미지" className="-mt-5" />
        </div>
        <div className="order-1 flex flex-col items-center md:order-2 md:min-w-[300px] xl:min-w-[700px]">
          <span className="text-3xl font-medium lg:text-4xl xl:text-5xl"> 링크를 폴더로 관리하세요</span>
          <div className="mt-2 flex flex-col items-center text-gray-400 lg:text-xl xl:mt-8 xl:text-3xl">
            <span>나만의 폴더를 무제한으로 만들고</span>
            <span>다양하게 활용할 수 있습니다.</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-[#FAFAFA] pt-8 md:flex-row">
        <div className="flex flex-col items-center md:min-w-[300px] xl:min-w-[700px]">
          <span className="text-3xl font-medium lg:text-4xl xl:text-5xl"> 간단한 메모를 작성해보세요</span>
          <div className="mt-2 flex flex-col items-center text-gray-400 lg:text-xl xl:mt-8 xl:text-3xl">
            <span>손쉽게 메모를 생성하고</span>
            <span>수정하고 삭제해보세요</span>
          </div>
        </div>
        <div>
          <img src="/home_1.png" alt="3번 이미지" className="-mt-5" />
        </div>
      </div>
      {/* <div className="flex w-full items-center justify-center bg-white py-20">
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
      </div> */}
      {/* 
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
      </div> */}
    </>
  );
}
