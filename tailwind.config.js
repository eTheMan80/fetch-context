/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      zIndex: {
        100: "100",
        1000: "1000",
      },
    },
  },
  plugins: [],
}
