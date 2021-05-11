module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        mmGreyLite: "#E2E2DF", // Body
        mmGreyMid: "#797F82", // Label
        mmGreyMidDarker: "#909497", // Button
        mmBlack: "#101010",
        mmWhite: "#FFFFFF",
        mmBlueDark: "#22292F", // Input text

        statusGreen: "#09D395",
        statusOrange: "#F2B208",
        statusRed: "#F2B208",
        statusGrey: "#909497",
      },
    },
  },
  variants: {},
  plugins: [],
};
