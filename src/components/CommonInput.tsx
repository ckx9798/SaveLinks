interface ICommonInput {
  labelName: string;
  register: any;
  name: string;
  placeholder: string;
}

export default function CommonInput({ labelName, register, name, placeholder }: ICommonInput) {
  return (
    <div>
      <label>{labelName}</label>
      <input
        placeholder={placeholder}
        {...register(name)}
        className="w-full h-[60px] bg-white border border-gray03 rounded-lg px-3 text-xl focus:border-primary focus:outline-none"
      />
    </div>
  );
}
