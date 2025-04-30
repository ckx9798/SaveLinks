import { useEffect, useRef } from "react";

import { UserDropdownProps } from "../../type/modal";

export default function UserDropdown({ onClose, onLinkClick, onMemoClick, onLogoutClick }: UserDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        onClose(); // 바깥 클릭하면 드롭다운 닫기
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div
      className="animate-dropdown absolute right-0 top-10 mt-2 w-24 translate-y-2 overflow-hidden scroll-smooth rounded-xl bg-white opacity-0 shadow-lg ring-1 ring-black/10 transition-all duration-300 ease-out md:w-44"
      onClick={onClose}
      ref={dropdownRef}
    >
      <button
        className="w-full border-b-2 px-4 py-2 text-center transition-colors hover:bg-gray-100 hover:font-bold hover:text-primary md:py-2"
        onClick={() => {
          onLinkClick();
          onClose();
        }}
      >
        Links
      </button>
      <button
        className="w-full border-b-2 px-4 py-2 text-center transition-colors hover:bg-gray-100 hover:font-bold hover:text-primary"
        onClick={() => {
          onMemoClick();
          onClose();
        }}
      >
        Memos
      </button>
      <button
        className="w-full px-4 py-2 text-center transition-colors hover:bg-gray-100 hover:font-bold hover:text-primary"
        onClick={() => {
          onLogoutClick();
          onClose();
        }}
      >
        Log Out
      </button>
    </div>
  );
}
