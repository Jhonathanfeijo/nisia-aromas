/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors:{
      primary: '#BFA380',
      secondary: '#736048',
      black:'#100305',
      whiteSecondary:'#F2ECE4'
    }},
  },
  plugins: [],
}

