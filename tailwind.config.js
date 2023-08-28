/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-primary-dark": "hsl(0, 0%, 90%)",
        "text-secondary-dark": "hsl(0, 0%, 70%)",
        "bg-gradient": "radial-gradient(ellipse at bottom, hsl(211, 33%, 16%) 0%, hsl(230, 25%, 5%) 100%)",
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
