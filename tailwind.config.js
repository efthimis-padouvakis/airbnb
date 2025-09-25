/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // προαιρετικά, για να καλύπτει όλο το src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
