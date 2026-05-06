/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aws: {
          navy: '#0f111a',
          orange: '#ff9900',
          blue: '#007eb9',
          dark: '#0a0b10',
          border: 'rgba(255, 255, 255, 0.1)'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
