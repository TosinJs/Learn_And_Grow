module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        blue: "2px solid #2563EB"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      borderWidth: ["active"],
      borderColor: ["active"],
    },
  },
  plugins: [],
}
