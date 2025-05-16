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
      <label className="mb-2 text-gray01">{labelName}</label>
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className="rounded-md border px-4 py-3 outline-none focus:outline-primary"
      />
    </div>
  );
}
