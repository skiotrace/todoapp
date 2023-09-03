/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#663399",
        secondary: "#FAF0E6",
        light: "#352F44",
        power: "#864879",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(210deg, #522888, #8f2686, #be2d7c, #e2456d, #fa675d, #ff8d50, #ffb54a, #ffdd55);",
        gradientinner:
          "linear-gradient(45deg, #fffea3, #ffc79d, #ffa2d4, #a3a4ff);",
      },
    },
  },
  plugins: [],
};
