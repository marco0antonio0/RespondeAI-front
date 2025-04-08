import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'sm': { min: '639px' },
        // => @media (min-width: 639px) { ... }
  
        'md': { min: '767px' },
        // => @media (min-width: 767px) { ... }
  
        'lg': { min: '1023px' },
        // => @media (min-width: 1023px) { ... }
  
        'xl': { min: '1279px' },
        // => @media (min-width: 1279px) { ... }
  
        '2xl': { min: '1535px' },
        // => @media (min-width: 1535px) { ... }

        'smi': { max: '639px' },
        // => @media (max-width: 639px) { ... }
  
        'mdi': { max: '810px' },
        // => @media (max-width: 767px) { ... }
  
        'lgi': { max: '1023px' },
        // => @media (max-width: 1023px) { ... }
  
        'xli': { max: '1279px' },
        // => @media (max-width: 1279px) { ... }
  
        '2xli': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }
      },
    },
  },
  darkMode: "class",
  plugins: [ heroui({
    themes: {
      light: {
        colors: {
          background: "#FFFFFF", // or DEFAULT
          foreground: "#11181C", // or 50 to 900 DEFAULT
          primary: {
            //... 50 to 900
            foreground: "#FFFFFF",
            DEFAULT: "#006FEE",
          },
          // ... rest of the colors
        },
      },
      dark: {
        colors: {
          background: "#000000", // or DEFAULT
          foreground: "#ECEDEE", // or 50 to 900 DEFAULT
          primary: {
            //... 50 to 900
            foreground: "#FFFFFF",
            DEFAULT: "#006FEE",
          },
        },
        // ... rest of the colors
      },
      mytheme: {
        // custom theme
        extend: "dark",
        colors: {
          primary: {
            DEFAULT: "#BEF264",
            foreground: "#000000",
          },
          focus: "#BEF264",
        },
      },
    },
  }),],
};
export default config;
