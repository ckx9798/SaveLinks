export function BackgroundImage() {
  return (
    <img
      src="/layout_bg.webp"
      alt="배경 이미지"
      className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  );
}
