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
    <div className="mb-4 flex flex-col">
      <label className="mb-1 font-semibold">{labelName}</label>
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className="rounded-md border p-2 outline-none focus:border-primary"
      />
    </div>
  );
}
