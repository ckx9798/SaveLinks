import { ButtonProps } from "../type/components";

const baseClass = "flex justify-center items-center text-white01 rounded-lg text-2xl font-semibold";

const sizeClass = {
  xs: "w-[90px] h-[37px]",
  sm: "w-[90px] h-[37px] md:w-[128px] md:h-[53px]",
  md: "w-[280px] h-[51px]",
  lg: "w-[325px] h-[53px] md:w-[400px] md:h-[53px]",
  response: "w-full max-w-[400px] h-[53px]",
};

const colorClass = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  gradientRed: "bg-gradient-to-r from-pink-400 to-red-500",
  gradientBlue: "bg-gradient-to-r from-primary to-secondary",
};

export default function Button({ size, color = "gradientBlue", text, ...props }: ButtonProps) {
  return (
    <button {...props} className={`${baseClass} ${sizeClass[size]} ${colorClass[color]}`}>
      {text}
    </button>
  );
}
