/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./public/**/*.html"],

  theme: {
    extend: {
      colors: {
        primary: "#6D6AFE",
        secondary: "#6AE3FE",
        logo: "#4941FE",
        red01: "#FF5B56",
        black01: "#111322",
        white01: "#FFFFFF",
        gray01: "#F5F5F5",
        gray02: "#E8E8E8",
        gray03: "#D9D9D9",
        gray04: "#2C2C2C",
        gray05: "#F0F6FF",
        gray06: "#666666",
        gradientRed: "bg-gradient-to-r from-pink-300 to-red-400",
        gradientBlue: "bg-gradient-to-r from-primary to-secondary",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        dropdown: {
          "0%": { opacity: "0", transform: "translateY(0.5rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1.2s ease-out forwards",
        dropdown: "dropdown 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
