/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        infernal: "hsl(120, 100%, 50%)",
        "text-primary-dark": "hsl(0, 0%, 90%)",
        "text-secondary-dark": "hsl(0, 0%, 70%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
