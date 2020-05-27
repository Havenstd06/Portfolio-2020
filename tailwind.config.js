module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var"],
        firacode: ["Fira Code"],
        raleway: ["Raleway"],
      },
    maxWidth: {
     '0.5xl': '39rem',
    }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
