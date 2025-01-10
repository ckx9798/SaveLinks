/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6D6AFE",
        secondary: "#6AE3FE",
        logo: "#4941FE",
        red01: "#FF5B56",
        black01: "#111322",
        white01: "#FFFFFF",
        gray01: "#3E3E4E",
        gray02: "#9FA6B2",
        gray03: "#CCD5E3",
        gray04: "#E7EFFB",
        gray05: "#F0F6FF",
        gray06: "#666666",
      },
    },
  },
  plugins: [],
};
