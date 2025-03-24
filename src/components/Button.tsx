import { ButtonProps } from "../type/components";

const baseClass = "flex justify-center items-center text-white01 rounded-lg text-2xl font-semibold";

const sizeClass = {
  xs: "w-[90px] h-[37px]",
  sm: "w-[90px] h-[37px] md:w-[128px] md:h-[53px]",
  md: "w-[280px] h-[51px]",
  lg: "w-[325px] h-[53px] md:w-[400px] md:h-[53px]",
  response: "w-full max-w-[400px] h-[53px]",
};

export default function Button({ size, color, text, ...props }: ButtonProps) {
  const dynamicColorClass = color || "bg-gradient-to-r from-primary to-secondary";

  return (
    <button {...props} className={`${baseClass} ${sizeClass[size]} ${dynamicColorClass}`}>
      {text}
    </button>
  );
}
