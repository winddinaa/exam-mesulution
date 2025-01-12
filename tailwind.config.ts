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
        primary: {
          main: "#007FFF",
        },
        base: {
          black: "#000000",
          white: "#FFFFFF",
          text: "#191919",
          lightBlue: "#007FFF1A",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
