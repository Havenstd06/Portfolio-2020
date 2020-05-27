module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var"],
        firacode: ["Fira Code"],
        raleway: ["Raleway"],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
