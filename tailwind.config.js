/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      width: {
        '8/10': '80%', // Custom width for 80%
        '7/10': '70%', // Custom width for 70%
        '6/10': '60%', // Custom width for 60%
        '5/10': '50%', // Custom width for 50%
        '4/10': '40%', // Custom width for 40%
        '3/10': '30%', // Custom width for 30%
      },
      colors: {
        textcolor: '#81AFDD', // Custom color for text
      },
    },
  },
  stats: {
    children: true,
  },
  plugins: [],
}

