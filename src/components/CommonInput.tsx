interface ICommonInput {
  labelName: string;
  register: any;
  name: string;
  placeholder: string;
}

export default function CommonInput({ labelName, register, name, placeholder, type = "text" }: ICommonInput) {
  return (
    <div className="mb-4 flex flex-col">
      <label className="mb-1 font-semibold">{labelName}</label>
      <input
        {...register(name)}
        type={type} // ✅ 여기서 type을 적용해야 함!
        placeholder={placeholder}
        className="rounded-md border p-2 outline-none focus:border-primary"
      />
    </div>
  );
}
