/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ".index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'JollyLodger': ['Jolly Lodger', 'system-ui'],
      'Montserrat': ['Montserrat', 'sans-serif;']
    },
    extend: {},
  },
  plugins: [],
}

