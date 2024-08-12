/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        25: "100px",
      },
      maxWidth: {
        360: "1440px",
      },
    },
  },
  plugins: [],
};
