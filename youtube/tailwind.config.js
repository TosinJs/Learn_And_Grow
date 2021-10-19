module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        blue: "2px solid #2563EB"
      },
      gridTemplateColumns: {
        "tube": "80px auto-fill"
      },
      gridTemplateRows: {
        "tube": "56px calc(100vw - 400px)"
      },
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
