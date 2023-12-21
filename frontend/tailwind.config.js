// /** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
// // export default {
// //   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // };

// module.exports = withMT({
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 10s linear infinite",
        marquee2: "marquee2 12s linear infinite",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      colors: {
        primary: "#489dda",
        secondary: "#0a122e",
      },
    },
  },
  variants: {},
  plugins: [],
});
