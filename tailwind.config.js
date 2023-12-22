/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Archivo: ["Archivo", "sans-serif"],
        Yantramanav: ["Yantramanav", "sans-serif"],
      },
      colors: {
        PrimaryColor: ["#171717"],
        SecondaryColor: ["#ff5e14"],
        BorderColor: ["#ffffff34"],
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1600px ",
        "4xl": "1700px",
        // 1400-1600, 1300-1399,1200-1299,992-1199(1170),768-991,600-767,480-599,320-479
      },
      // keyframes: {
      //   "shape-round":
      // }
    },
    

    lineHeight: {},
  },
};
