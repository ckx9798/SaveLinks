import { BackgroundImage } from "../extension/BackgroundImage";
import ExtensionHeader from "../extension/ExtensionHeader";
import ExtensionShorts from "../extension/ExtensionShorts";
import MotionChatButton from "../components/Chat/MotionChatButton";
import { getMaxWidth } from "../utils/getMaxWidth";
import { useSavedUrls } from "../utils/useSavedUrls";

export default function ShortsExtension() {
  const { savedUrls } = useSavedUrls();
  const maxWidth = getMaxWidth(savedUrls.length);

  return (
    <>
      <div className="relative flex w-full flex-col items-center justify-center px-4 md:px-8 xl:px-10">
        <BackgroundImage />
        <ExtensionHeader maxWidth={maxWidth} />
      </div>

      <div className="flex h-auto min-h-screen justify-center bg-gray04">
        <div
          className={`mx-auto grid w-full gap-10 px-2 pb-40 pt-12 sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] ${maxWidth}`}
        >
          {savedUrls.map((shortsObj) => (
            <ExtensionShorts shortsObj={shortsObj} key={shortsObj.id} />
          ))}
        </div>
      </div>
      <MotionChatButton />
    </>
  );
}
