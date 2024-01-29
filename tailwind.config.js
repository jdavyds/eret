/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007417",
        secondary: "#001F06",
        "primary-light": "#EAFFEE",
        dark: "#212121",
      },
    },
  },
  plugins: [],
};
