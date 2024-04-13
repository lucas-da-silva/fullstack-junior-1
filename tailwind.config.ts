import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "title": "var(--title-font)",
      },

      colors: {
        "primary-color": "#303030",
        "secondary-color": "#909090",
      },

      fontSize: {
        "section-size": ["32px", "47.42px"],
        "sub-section-size": ["18px", "26.68px"],
        "description-size": ["18px", "32px"],
      }
    },
  },
  plugins: [],
};
export default config;
