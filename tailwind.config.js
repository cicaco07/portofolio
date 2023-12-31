/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        '3xl': '20px 20px 0px rgb(0, 0, 0)'
      }
    },
  },
  plugins: [require('daisyui')],
  darkMode: 'class',
  daisyui: {
    themes: [
      {
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          ".text-common": {
            "color": "#ffffff",
          },
          ".common": {
            "color": "#ffffff",
          },
        },
        retro: {
          ...require("daisyui/src/theming/themes")["retro"],
          ".text-common": {
            "color": "#000000",
          },
          ".common": {
            "color": "#000000",
          },
        }
      },
      "light",
      "dark",
      "cupcake",
      "synthwave",
      "garden",
    ],
  }
}
