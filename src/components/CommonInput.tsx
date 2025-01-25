interface ICommonInput {
  labelName: string;
  register: any;
  name: string;
  placeholder: string;
}

export default function CommonInput({ labelName, register, name, placeholder }: ICommonInput) {
  return (
    <div>
      <label className="mb-2 text-xl">{labelName}</label>
      <input
        placeholder={placeholder}
        {...register(name)}
        className="my-2 h-[50px] w-full rounded-lg border border-gray03 bg-white px-3 text-xl focus:border-primary focus:outline-none"
      />
    </div>
  );
}
