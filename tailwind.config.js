/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {
        fontFamily: {
          parisienne: ['"Parisienne"', 'cursive'],
      cinzel:['"Cinzel"', 'serif'],
      heading: ['"Marcellus"', 'serif'],
      body: ['"Josefin Sans"', 'serif'],
    },
    colors: {
    terracotta: "#C86A4A",
    olive: "#6A7F3F",
    sand: "#E8DCC0",
    pomegranate: "#B33939",
    charcoal: "#1D1D1B",
    cream: "#FAF7F2",
  },
  } 
},
  plugins: [],
};