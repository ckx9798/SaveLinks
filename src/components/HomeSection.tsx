interface HomeSectionProps {
  title: string;
  descriptions: string[];
  imgSrc: string;
  aosType: string;
}

export function HomeSection({ title, descriptions, imgSrc, aosType }: HomeSectionProps) {
  return (
    <div
      className="flex flex-col items-center px-10 pt-8 md:h-[400px] md:flex-row lg:h-[1000px] xl:h-[1200px]"
      data-aos={aosType}
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div className="w-2/3">
        <img src={imgSrc} alt="섹션 이미지" />
      </div>

      <div className="flex flex-col items-center md:w-1/3">
        <span className="w-auto text-2xl font-medium lg:text-4xl xl:text-5xl">{title}</span>
        <div className="mt-2 flex flex-col items-center text-gray-400 lg:text-xl xl:mt-8 xl:text-3xl">
          {descriptions.map((line, idx) => (
            <span key={idx}>{line}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
