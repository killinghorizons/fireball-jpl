// tailwind.config.js
module.exports = {
  plugins: [require("daisyui")],

  theme: {
    extend: {
      colors: {
        "primary-muted": "red",
      },
    },
  },

  daisyui: {
    themes: [
      {
        light: {
          // importing the built-in 'light' theme
          // and setting the color values for '--primary-muted'
          // (numbers are OKLCH values)
          ...require("daisyui/src/theming/themes")["light"],
          "--primary-muted": "red",
        },
      },
    ],
  },
};
