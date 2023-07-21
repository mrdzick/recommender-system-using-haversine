/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
      "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
      "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}); 

