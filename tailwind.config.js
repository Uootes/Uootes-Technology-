/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// import type { Config } from "tailwindcss";

// import { mtConfig } from "@material-tailwind/react";



// const config: Config = {

//   content: [

//     ...

//     "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}"

//   ],

//   plugins: [mtConfig],

// };



// export default config;
