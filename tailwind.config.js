/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      backgroundImage:{
        'bg-one':'url("public/background.jpg")'
      },
      fontFamily:{
        Poppins:["Poppins"],
        JosefinSans:["Josefin Sans"],
        Jost:["Jost"]
        

      }
    },
  },
  plugins: [],
}