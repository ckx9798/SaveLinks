export default function NoLinks() {
  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center">
      <img src="/noLinks.svg" width={300} />
      <p className="-mt-4 text-3xl text-primary">저장된 링크가 없습니다 </p>
    </div>
  );
}
