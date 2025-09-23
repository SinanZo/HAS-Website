/*  tailwind.config.js  */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%":  { transform: "translateX(0)"     },
          "100%":{ transform: "translateX(-50%)" } // move by half, we duplicate items
        }
      },
      animation: {
        marquee: "marquee 28s linear infinite"
      },
      colors: {
        primary:  "#034d58",
        accent:   "#ffcc00"
      }
    }
  },
  plugins: []
};
