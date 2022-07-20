/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-image' : "url('/src/assets/images/Hero/landing-image.png')",
        'landing-image-gradient' : "linear-gradient(0deg, rgba(30, 30, 30, 0.3), rgba(30, 30, 30, 0.3)), url('/src/assets/images/Hero/landing-image.png')",
        'missions-image': "url('/src/assets/images/Wallpapers/dragon-wallpaper.jpg')"
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
      screens: {
        'xs': { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
        'sm': { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
        'md': { min: '898px', max: '1200px' }, // Tablet (matches max: iPad Pro @ 1112px).
        'lg': { min: '1201px' }, // Desktop smallest.
        'xl': { min: '1159px' }, // Desktop wide.
        '2xl': { min: '1359px' }, // Desktop widescreen.
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
