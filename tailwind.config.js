module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#48B600",
        lightBlack: "#bcbcbc",
        orangeC: "#ffce31",
        redC: "#ff0000",
        grayC: "#f4f4f4",
        subGreen: "#eefae6",
        deepGray: "#e1f0d7",
        deepestGray: "#c4c4c4",
        blueC: "#3b87f9",
        underline: "#e5e5e5",
        paypal: "#ffb730",
      },
    },
  },
  plugins: [],
};
