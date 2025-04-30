interface HomeSectionProps {
  title: string;
  descriptions: string[];
  imgSrc: string;
  imgFirst?: boolean;
  aosType: string;
}

export function HomeSection({ title, descriptions, imgSrc, imgFirst = false, aosType }: HomeSectionProps) {
  return (
    <div
      className="flex h-screen flex-col items-center bg-[#FAFAFA] pt-8 md:flex-row"
      data-aos={aosType}
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      {imgFirst && (
        <div className="order-2 md:order-1">
          <img src={imgSrc} alt="섹션 이미지" className="-mt-5" />
        </div>
      )}
      <div
        className={`order-1 flex flex-col items-center ${imgFirst ? "md:order-2" : ""} md:min-w-[300px] xl:min-w-[700px]`}
      >
        <span className="text-3xl font-medium lg:text-4xl xl:text-5xl">{title}</span>
        <div className="mt-2 flex flex-col items-center text-gray-400 lg:text-xl xl:mt-8 xl:text-3xl">
          {descriptions.map((line, idx) => (
            <span key={idx}>{line}</span>
          ))}
        </div>
      </div>
      {!imgFirst && (
        <div>
          <img src={imgSrc} alt="섹션 이미지" className="-mt-5" />
        </div>
      )}
    </div>
  );
}
