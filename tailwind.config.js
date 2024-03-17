// tailwind.config.js
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom primary color here
        primary: '#f1f5f9', // Replace with your desired primary color
      },
    },
  },
  plugins: [
    typography,
    forms,
    aspectRatio,
  ],
}
