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
      keyframes: {
        marqueeToLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marqueeToLeft: "marqueeToLeft 30s linear infinite",
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
