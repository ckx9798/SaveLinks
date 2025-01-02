import Button from "./Button";

export default function AddLink() {
  return (
    <form className="w-full max-w-[800px] flex justify-between items-center px-3 py-2 md:px-5 md:py-3 border border-primary rounded-xl">
      <div className="flex w-full gap-5">
        <img src="/link.svg" />
        <input placeholder="링크를 추가해 보세요" className="w-full mr-5 px-2 md:py-2 text-2xl bg-inherit" />
      </div>
      <Button size="xs" text="추가하기" />
    </form>
  );
}
