import { FieldValues, Path, UseFormRegister } from "react-hook-form";

import { ButtonHTMLAttributes } from "react";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "response";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  text: string;
  color?: string;
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
}
