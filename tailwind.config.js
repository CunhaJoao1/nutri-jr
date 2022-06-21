/** @type {import('tailwindcss').Config} */
import nutri1 from "./assets/nutri.jpg"
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      keyframes:{
        pingslow:{
          '75%, 100%':{transform: 'scale(1.3)', opacity:0}
          

        },
      },
      animation: {
        'ping-slow': 'pingslow 2s ease infinite',
      },
      
      backgroundImage:{
        'home-nutri': `url(${nutri1})`,
        'about-food': "url('assets/food.jpg')",
        'contact-nutri': "url('assets/nutri_2.jpg')",
      },
      fontFamily:{
        'sans':['Poppins']
      },
      colors:{
        brand:{
          100: "#e0f19c",
          300: "#31a736",
          400: "#0c9d3c",
          500: "#467010",
          600: "#2a4109"
        },
        title:"#000000CC",
        para:"#666666",
        subtitle: "#31a736",
        footer:"#222831"
      }
    },
  },
  plugins: [],
}
