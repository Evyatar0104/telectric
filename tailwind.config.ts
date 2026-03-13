import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D",
        surface: "#1A1A1A",
        accent: "#F5C518",
        white: "#F8F8F8",
        muted: "#666666",
      },
      borderRadius: {
        card: "8px",
        button: "6px",
      },
      fontFamily: {
        heebo: ["var(--font-heebo)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
