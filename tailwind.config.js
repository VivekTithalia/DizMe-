/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      backgroundImage:{
        'bg-one':'url("./background.jpg")',
        'bg-dark':'url("./darkbg.jpg")'
      },
      fontFamily:{
        Poppins:["Poppins"],
        JosefinSans:["Josefin Sans"],
        Jost:["Jost"],
        Playfair:["Playfair Display"]
        

      },
      screens: {
        'md':'1025px',
        'lg':'1240px',
        '2xl': '1920px', 
       
      },
    },
  },
  plugins: [

    require('flowbite/plugin')
  ],
}