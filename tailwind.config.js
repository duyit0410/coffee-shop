const tailwindcss = require("tailwindcss");
tailwindcss("./tailwind.config.js");
module.exports = {
  content: ["./src/**/*.{js,jsx,tsx,ts}"],
  theme: {
    extend: {
      boxShadow: {
        1: "0px 4px 20px 0px #00000040",
      },
      colors: {
        app: "#2bb3a8",
        red: "#e34133",
      },
      borderWidth: {
        1: "1px",
      },
      fontSize: {
        12: "12px",
        16: "16px",
        20: "20px",
        24: "24px",
      },
    },
  },
  plugins: [],
};
