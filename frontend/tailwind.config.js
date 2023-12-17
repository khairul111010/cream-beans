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
      colors: {
        primary: "#489dda",
        secondary: "#0a122e",
      },
    },
  },
  plugins: [],
});
