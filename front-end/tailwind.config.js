/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1536px",
      xl: "1920px",
      "2xl": "2036px",
    },
  },
  plugins: [],
};
