const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#862E9C',
        'secondary': '#AE3EC9'
      },
    },
  },
  plugins: [
      require("daisyui"),
      require("tailwind-scrollbar-hide")
  ],
}
