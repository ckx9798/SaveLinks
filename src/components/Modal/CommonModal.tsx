import Button from "../Button";
import { CommonModalProps } from "../../type/modal";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useEffect } from "react";

export default function CommonModal({
  title,
  inputPlaceholder,
  buttonText,
  onClose,
  onSubmit,
  showInput = true,
  inputValue,
  setInputValue,
  contentText,
  buttonColor,
}: CommonModalProps) {
  // ESC 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  // Enter 제출
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (showInput) {
        onSubmit(inputValue);
      } else {
        onSubmit();
      }
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div
        className="relative flex h-auto w-[90%] max-w-[400px] flex-col items-center rounded-3xl bg-white px-8 py-10 shadow-lg sm:px-16"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <IoCloseCircleOutline
          className="absolute right-3 top-3 cursor-pointer text-2xl md:text-3xl"
          onClick={onClose}
        />

        {/* 제목 */}
        <h2 className="mb-6 text-4xl">{title}</h2>

        {/* 텍스트 또는 인풋 */}
        {showInput ? (
          <input
            type="text"
            className="w-full rounded-md border border-black px-4 py-2 text-2xl placeholder:text-xl focus:border-primary focus:outline-none"
            placeholder={inputPlaceholder}
            value={inputValue}
            onChange={(e) => setInputValue && setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <p className="text-2xl">{contentText}</p>
        )}

        {/* 버튼 */}
        <Button
          size="response"
          text={buttonText}
          color={buttonColor}
          onClick={() => {
            if (showInput) {
              onSubmit(inputValue);
            } else {
              onSubmit();
            }
          }}
          style={{ marginTop: "30px" }}
        />
      </div>
    </div>
  );
}
