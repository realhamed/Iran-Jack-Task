/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5B5FC7",
        primary2: "#B146C2",
        lightTeal: "#00B7C3",
        neutralGray: "#D1D1D1",
        chartTickColor: "#616161",
        borderColor1: "#E0E0E0",
        text1: "#424242",
        text2: "#242424",
        text3: "#707070",
        hover1: "#EBEBEB",
        background1: "#F0F0F0",
      },
      borderWidth: {
        0.5: "0.5px",
        1.5: "1.5px",
      },
      boxShadow: {
        normalShadow: "0px 0px 2px 0px #0000001F, 0px 2px 4px 0px #00000024",
      },
      screens: {
        "4xs": "320px",
        "3xs": "375px",
        "2xs": "425px",
        xs: "550px",
        "3xl": "1750px",
        "4xl": "1900px",
        "5xl": "2300px",
      },
    },
  },
  plugins: [],
};
