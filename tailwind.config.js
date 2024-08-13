/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        28: "28px",
        40: "40px",
        52: "52px",
      },
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
