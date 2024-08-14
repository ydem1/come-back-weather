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
        15: "60px",
        25: "100px",
      },
      maxWidth: {
        360: "1440px",
      },
      screens: {
        default: "0px",
        xs: "450px",
        sm: "600px",
        md: "720px",
        lg: "900px",
        gl: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
