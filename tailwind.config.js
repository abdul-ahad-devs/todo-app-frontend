/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primaryGreen: "#20C20E",
      secondaryMattBlack: "#222326",
    },
    extend: {
      colors: {
        primaryGreen: "#20C20E",
        secondaryMattBlack: "#222326",
      },
    },
  },
};
