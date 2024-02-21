import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          "100": "#F7F7F7",
          "200": "#F4F4F4",
          "300": "#F0F2F3",
          "350": "#EEEEEE",
          "400": "#D0D0D0",
          "425": "#CCCCCC",
          "450": "#AAAAAA",
          "500": "#777777",
          "600": "#666666",
          "800": "#444444",
        },
        blue: {
          200: "#D4E5EF",
          400: "#1367DF",
          500: "#0B4291",
        },
        red: {
          500: "#F40000",
          600: "#FF0000",
        },
        green: {
          400: "#2DAC00",
        },
        rose: {
          400: "#EF0D4A",
        },
        pink: {
          400: "#F6B2BB",
        },
        yellow: {
          400: "#FEDE02",
        },
        orange: {
          400: "#F76F23",
        },
      },
    },
  },
  plugins: [],
};
export default config;
