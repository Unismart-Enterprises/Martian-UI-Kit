import { Colors } from "./types";

export const baseColors = {
  failure: "#F72B50",
  primary: "#7dcc32",
  primaryBright: "#22310a",
  primaryDark: "#d95b00",
  secondary: "#8fd129",
  success: "#68CF29",
  warning: "#FFAB2D",
};

export const brandColors = {
  binance: "#273e04",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#22310a",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputBorder: "#cccccc",
  tertiary: "#175919",
  text: "#8fd129",
  textDisabled: "#BDC2C4",
  textSubtle: "#7dcc32",
  borderColor: "#E9EAEB",
  card: "#1b2b03",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#e9f1fd",
  background: "#1f2b46",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#0a0e17",
  input: "#483f3b",
  inputBorder: "#cccccc",
  primaryDark: "#d95b00",
  tertiary: "#2d2f37",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#7dcc32",
  borderColor: "#524B63",
  card: "#121827",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1f606f 0%, #164865 100%)",
  },
};
