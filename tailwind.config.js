/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          cyan: '#00EAFF',
          blue: '#2563EB',
          pink: '#FF4DD2',
          deep: '#080A12'
        }
      }
    },
  },
  plugins: [],
};
