import { LinkDropdownProps } from "../type/components";

export default function LinkDropdown({ setIsEditModalOpen, setIsDeleteModalOpen }: LinkDropdownProps) {
  const handleEditModal = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    setIsEditModalOpen((prev) => !prev);
  };

  const handleDeleteModal = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    setIsDeleteModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="absolute right-1 top-6 mt-2 w-40 rounded-md bg-white shadow-lg">
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
