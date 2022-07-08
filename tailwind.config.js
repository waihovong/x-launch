/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-image' : "url('/src/assets/images/landing-image.png')",
        'landing-image-gradient' : "linear-gradient(0deg, rgba(30, 30, 30, 0.3), rgba(30, 30, 30, 0.3)), url('/src/assets/images/landing-image.png')",
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
    },
    fontFamily: {
      navigation: ['Epilogue', 'sans-serif'],
      header: ['Epilogue', 'sans-serif'],
      standard: ['Epilogue', 'sans-serif'],
    },
  },
  plugins: [],
}
