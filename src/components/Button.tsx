import React, { ButtonHTMLAttributes } from "react";

type ButtonSize = "xs" | "sm" | "md" | "lg";

const baseClass =
  "flex justify-center items-center bg-gradient-to-r from-primary to-secondary from-5% to-90% text-white01 rounded-lg text-xl font-semibold";

const sizeClass = {
  xs: "w-[90px] h-[37px]",
  sm: "w-[90px] h-[37px] md:w-[128px] md:h-[53px]",
  md: "w-[280px] h-[51px]",
  lg: "w-[325px] h-[53px] md:w-[400px] md:h-[53px]",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  text: string;
}

export default function Button({ size, text, ...props }: ButtonProps) {
  return (
    <button className={`${baseClass} ${sizeClass[size]}`} {...props}>
      {text}
    </button>
  );
}
