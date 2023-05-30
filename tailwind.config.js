/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["garden", "forest"]
  },
  plugins: [require('daisyui')],
}
