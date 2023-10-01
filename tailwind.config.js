/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ghostwhite: {
          "100": "#f6f4fd",
          "200": "#f0f1f7",
        },
        "grayscale-white": "#fff",
        mediumseagreen: "#29cc97",
        "grayscale-black": "#252733",
        gold: "#fec400",
        red: "#ff0303",
        "accent-default": "#3751ff",
        "grayscale-gray": "#9fa2b4",
        black: "#000",
        gray: "#fefefe",
        lightgray: "#d2d2d2",
        silver: "#b9b9b9",
        cornflowerblue: "#1a6bba",
        lightsteelblue: "#c3dffa",
        darkslateblue: "#2a4178",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        mini: "15px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "2xs": "0.69rem",
      sm: "0.88rem",
      lg: "1.13rem",
      "41xl": "3.75rem",
      "9xl": "1.75rem",
      base: "1rem",
      xs: "0.75rem",
      inherit: "inherit",
    },
    screens: {
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
