import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"#919191",
        secondary:"#D9D9D9",
        Player2:"#DE3163",
        Player1:"#CCDF92",
        Player2Border:"#9B2346",
        Player1Border:"#8C9964",
        MMButton:"#3DA9E0",
        HexButton:"#BCA357",
        ENDButton:"#BC5757",
      },
      fontFamily:{
        customFont: ['"Irish Grover"', "sans-serif"],
      }
    },
  },
  plugins: [require("@tailwindcss/typography"),require("tailwindcss-textshadow")],
} satisfies Config;
