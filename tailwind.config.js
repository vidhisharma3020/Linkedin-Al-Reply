/** @type {import('tailwindcss').Config} */
export const mode = "jit";
export const content = ["./src/**/*.{js,ts,jsx,tsx}", "./public/**/*.html", './entrypoints/popup/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    colors: {
      primary: "#3B82F6",
      "prompt-bg": "#DFE1E7",
      "response-bg": "#DBEAFE",
      "primary-gray": "#666D80",
      "input-text-clr": "#A4ACB9",
      relevantt: "#006BA7",
    },
  },
};
export const plugins = [];
