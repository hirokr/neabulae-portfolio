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
        
      },
      fontFamily: {
        mono : "var(--jetbrains-mono)",
        space: "var(--space-mono)",
      },
      colors:{
        yellow: "#FFD91A",
        bg: "#FFFFFF",    
        dashboard: "#FFF7D1",
        blue: "#132238",
        para_text: "#556070",
        blue_text: "#1777E5",
        footer_text: "#A5ACB5",
      }
    },
  },
  plugins: [],
};
export default config;
