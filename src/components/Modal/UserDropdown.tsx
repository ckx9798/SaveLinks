import { UserDropdownProps } from "../../type/modal";

export default function UserDropdown({ onClose, onProfileClick, onLogoutClick }: UserDropdownProps) {
  return (
    <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white shadow-md" onClick={() => onClose()}>
      <button
        className="w-full border-b-2 px-4 py-2 text-center hover:bg-gray-100"
        onClick={() => {
          onProfileClick();
          onClose();
        }}
      >
        TO DO
      </button>
      <button
        className="w-full px-4 py-2 text-center hover:bg-gray-100"
        onClick={() => {
          onLogoutClick();
          onClose();
        }}
      >
        LOG OUT
      </button>
    </div>
  );
}
