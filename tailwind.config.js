/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: '#66FCF1',
        dwhite: '#FFFFFF',
        bblack: '#0B0C10',
        dblue: '#000033',
        ggray: '#323031'
      },
      screens: {
        'sm': '640px',    // Small screens
        'md': '768px',    // Medium screens
        'lg': '1024px',   // Large screens
        'xl': '1280px',   // Extra large screens
        '2xl': '1536px',  // 2x Extra large screens
      },
    },
  },
  plugins: [],
}

