import { CommonInputProps } from "../type/components";
import { FieldValues } from "react-hook-form";

export default function CommonInput<T extends FieldValues>({
  labelName,
  register,
  name,
  placeholder,
  type = "text",
}: CommonInputProps<T>) {
  return (
    <div className="mb-4 flex flex-col text-xl">
      <label className="mb-1 text-gray01">{labelName}</label>
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className="rounded-md border p-2 outline-none focus:outline-primary"
      />
    </div>
  );
}
