import { ShortsObjProps } from "../type/extension";

export default function ExtensionErrorLink({ shortsObj }: { shortsObj: ShortsObjProps }) {
  return (
    <div className="flex aspect-[2/3] w-full flex-col items-center justify-center rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-indigo-50 p-6 text-gray-700 shadow-lg transition-all duration-300 md:min-h-[635px]">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 shadow-inner ring-2 ring-red-200">
        <span className="animate-bounce text-4xl text-red-400 drop-shadow-md">🚫</span>
      </div>
      <p className="mb-2 text-center text-lg font-semibold text-gray-800">
        이 링크는 미리보기를 지원하지 않아요.
        <br />
        직접 링크를 열어 확인해보세요!
      </p>
      <a
        href={shortsObj.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-md transition hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
      >
        <span className="text-base">🔗</span>
        <span className="max-w-[80px] truncate text-xl md:max-w-[180px]">{shortsObj.url}</span>
        <span className="ml-1 text-lg">로 이동하기</span>
      </a>
    </div>
  );
}
