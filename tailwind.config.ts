import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    corePlugins: {
      aspectRatio: false,
    },
    plugins: [
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/forms"),
      require("@tailwindcss/container-queries"),
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
    ],
  },
};

export default config;
