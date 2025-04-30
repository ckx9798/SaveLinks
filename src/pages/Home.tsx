import "aos/dist/aos.css";

import AOS from "aos";
import Button from "../components/Button";
import { HomeSection } from "../components/HomeSection";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <div className="relative flex h-screen w-screen flex-col gap-4 md:h-[800px] md:gap-10 lg:h-[1200px]">
        <img
          src="/home_bg.webp"
          alt="홈 배경 이미지"
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
        />
        <div className="flex w-full items-center justify-between pr-2 sm:px-6 md:px-8 lg:px-28">
          <img src="/saveLinks_logo.webp" onClick={() => navigate("/links")} className="-ml-6 w-[180px] md:w-[300px]" />
          <Button size="sm" text="로그인" onClick={() => navigate("/login")}></Button>
        </div>

        <div className="-mt-4 flex flex-col items-center justify-center text-white md:-mt-10" data-aos="zoom-in-up">
          <div>
            <span className="text-3xl font-bold lg:text-5xl">세상의 모든정보</span>
            <span className="text-2xl lg:text-4xl">를</span>
          </div>
          <div>
            <span className="text-2xl lg:text-6xl">쉽게 저장하고 관리해보세요</span>
          </div>
          <button
            className="mt-6 rounded-full bg-white px-8 py-1 text-xl font-medium text-black md:py-2 md:text-2xl lg:mt-12 lg:text-3xl"
            onClick={() => navigate("links")}
          >
            링크 추가하러가기
          </button>
        </div>
      </div>

      <HomeSection
        title="원하는 링크를 저장하세요"
        descriptions={[
          "나중에 읽고 싶은 글, 다시 보고 싶은 영상,",
          "사고 싶은 옷, 기억하고 싶은 모든 것을",
          "한 공간에 저장하세요.",
        ]}
        imgSrc="/home_1.webp"
        aosType="fade-down"
      />

      <HomeSection
        title="링크를 폴더로 관리하세요"
        descriptions={["나만의 폴더를 무제한으로 만들고", "다양하게 활용할 수 있습니다."]}
        imgSrc="/home_2.webp"
        imgFirst
        aosType="fade-left"
      />

      <HomeSection
        title="간단한 메모를 작성해보세요"
        descriptions={["손쉽게 메모를 생성하고", "수정하고 삭제해보세요"]}
        imgSrc="/home_3.webp"
        aosType="fade-right"
      />
    </>
  );
}
