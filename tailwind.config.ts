import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        move: {
          '0%': { transform: 'translate(0)' },
          '30%': {transform: 'translate(30dvh, 10dvh)'},
          '50%': { transform: 'translate(50dvh, 20dvh)' },
          '100%': { transform: 'translate(107dvh, 25dvh)' },
        }
      },
      animation: {
        move: 'move 2s ease-in-out forwards'
      }
    },
  },

  plugins: [], 
};
export default config;
