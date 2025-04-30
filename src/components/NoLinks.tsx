export default function NoLinks() {
  return (
    <div className="mx-auto mb-56 flex h-screen w-full max-w-[1200px] flex-col items-center">
      <img src="/noLinks.svg" width={300} className="pl-4 pt-8 md:pt-20" />
      <p className="-mt-4 text-3xl text-gray01">저장된 링크가 없습니다 </p>
    </div>
  );
}
