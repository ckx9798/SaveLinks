import { FieldValues, Path, UseFormRegister } from "react-hook-form";

import { ButtonHTMLAttributes } from "react";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "response";
type ColorType = "primary" | "secondary" | "gradientRed" | "gradientBlue";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  text: string;
  color?: ColorType;
  onClick?: () => void;
}

export interface CommonInputProps<T extends FieldValues> {
  labelName: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
}

export interface FolderProps {
  folderName: string;
  onClick: () => void;
}

export interface LinkDropdownProps {
  linkId: number;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UserFavoriteLinksProps {
  onClick: () => void;
}
