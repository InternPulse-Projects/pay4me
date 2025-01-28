/** @type {import('tailwindcss').Config} */
import tailwindcssMotion from "tailwindcss-motion";

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      sm: "640px", // Small screens
      md: "768px", // Medium screens
      lg: "1024px", // Large screens
      xl: "1280px", // Extra large screens
      "2xl": "1536px", // 2X Extra large screens
      "3xl": "1920px",
    },
    extend: {
      fontFamily: {
        cabinet: ["'Cabinet Grotesk'", "sans-serif"],
      },
    },
  },
  plugins: [tailwindcssMotion],
};
