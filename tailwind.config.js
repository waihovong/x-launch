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
        'missions-image': "url('/src/assets/images/Wallpapers/dragon-wallpaper.jpg')",
        'falcon_launch': "url('/src/assets/images/Wallpapers/falcon9_2.jpg')",
        'falcon_launch_2': "url('/src/assets/images/Wallpapers/falcon9.jpg')",
        'falcon_9' : "url('/src/assets/images/Wallpapers/falcon_9.jpg')",
        'falcon_heavy_hero' : "linear-gradient(0deg, rgba(30, 30, 30, 0.3), rgba(30, 30, 30, 0.3)), url('/src/assets/images/Wallpapers/falcon_heavy_2.jpg')",
        'starship_hero_1' : "linear-gradient(0deg, rgba(30, 30, 30, 0.3), rgba(30, 30, 30, 0.3)), url('/src/assets/images/Wallpapers/starship_wall_1.jpg')",
        'starship_hero_2' : "linear-gradient(0deg, rgba(30, 30, 30, 0.3), rgba(30, 30, 30, 0.3)), url('/src/assets/images/Wallpapers/starship_wall_2.jpg')",
        'starship_hero_3' : "linear-gradient(0deg, rgba(30, 30, 30, 0.3), rgba(30, 30, 30, 0.3)), url('/src/assets/images/Wallpapers/starship_wall_3.jpg')",
        'starship_hero_4' : "linear-gradient(0deg, rgba(30, 30, 30, 0.3), rgba(30, 30, 30, 0.3)), url('/src/assets/images/Wallpapers/starship_wall_4.jpg')",
        
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
