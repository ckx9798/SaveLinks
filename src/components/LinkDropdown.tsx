import { LinkDropdownProps } from "../type/components";

export default function LinkDropdown({
  setIsEditModalOpen,
  setIsDeleteModalOpen,
  setIsDropdownOpen,
}: LinkDropdownProps) {
  const handleEditModal = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    setIsEditModalOpen((prev) => !prev);
    setIsDropdownOpen(false);
  };

  const handleDeleteModal = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    setIsDeleteModalOpen((prev) => !prev);
  };

  const handleDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="absolute right-1 top-6 mt-2 w-40 rounded-md bg-white shadow-lg" onMouseLeave={handleDropdown}>
        <ul>
          <li className="cursor-pointer px-4 py-2 hover:bg-gray-100" onClick={handleEditModal}>
            Edit Link
          </li>
          <li className="cursor-pointer px-4 py-2 hover:bg-gray-100" onClick={handleDeleteModal}>
            Delete Link
          </li>
        </ul>
      </div>
    </>
  );
}
