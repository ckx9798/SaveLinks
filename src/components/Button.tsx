import { ButtonProps } from "../type/components";

const baseClass =
  "flex justify-center items-center bg-gradient-to-r from-primary to-secondary from-5% to-90% text-white01 rounded-lg text-2xl font-semibold";

const sizeClass = {
  xs: "w-[90px] h-[37px]",
  sm: "w-[90px] h-[37px] md:w-[128px] md:h-[53px]",
  md: "w-[280px] h-[51px]",
  lg: "w-[325px] h-[53px] md:w-[400px] md:h-[53px]",
  response: "w-full max-w-[400px] h-[53px]",
};

export default function Button({ size, text, ...props }: ButtonProps) {
  return (
    <button {...props} className={`${baseClass} ${sizeClass[size]}`}>
      {text}
    </button>
  );
}
