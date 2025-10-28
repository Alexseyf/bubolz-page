import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ab0303',    // Bright red color
        'primary-dark': '#8B0000', // Darker, less saturated red
        'secondary': '#fbaf00',  // Bright yellow/orange color
        'secondary-soft': '#e8c938', // Softer yellow color
        'white': '#ffffff',      // White color
      },
    },
  },
  plugins: [],
}

export default config
