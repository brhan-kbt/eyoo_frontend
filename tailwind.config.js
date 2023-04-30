/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      mobile: "360px",

      xxs: "380px",
      xs: "512px",
      // => @media (min-width: 512px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      m: "768px",
      // => @media (min-width: 768px) { ... }
      md: "1095px",
      // => @media (min-width: 768px) { ... }
      lg: "1024",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1600px",
      // => @media (min-width: 1600px) { ... }
      "4xl": "1920px",
      // => @media (min-width: 1920px) { ... }'
     
    },
    backgroundImage: {
      "footer-bg": "url('/src/assets/last.png')",
      "inner-bg": "url('/src/assets/bg.png')",
      "cloud-bg": "url('/src/assets/Cloud.png')"
    },
    fontFamily: {
      body: ["Roboto"],
      display: ["Roboto"],
      sans: ["Roboto"],
      serif: ["Roboto"],
    },

    extend: {
      dropShadow: {
        triangle: "0 0 25px rgba(0, 0, 0, 0.25)",
        text_shadow: "6px 6px 14px rgba(0, 255, 206, 0.85)",
        circle_shadow: "20px 20px 20px rgba(255, 209, 84, 0.6)",
        "text-shadow": "2px 8px 8px rgba(0, 0, 0, 0.25)",
        "box-shadow": "4px 6px 6px rgba(0, 0, 0, 0.25)",
      },
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
      },
      typography: {
        DEFAULT: {
          css: {
            lineHeight: "0.2rem",
          },
        },
      },

      fontSize: {
        md: ["1.125rem", "1.5rem"],
      },
      maxWidth: {
        six: "102rem",
      },
      height: {
        nav: "5.25rem",
      },

      flex: {
        six: "1 0 16.6%",
      },
      colors: {
        white: "#FFFFFF",
        primary: "#ECE4E2",
        "primary-lite": "#6ec8c0",
        "primary-dark": "#007166",
        "primary-dark-2": "#CCEAE7",
        secondary: "#444f60",
        "text-blue": "#23675A",
        "secondary-2": "#868686",
        "secondary-3": "#F8F8F8",
        "secondary-4": "#E5E5E5",
        "secondary-dark": "#313131",
        "HahuGray/4": "#ECEDEF",
        HahuGray2: "#697280",
        HahuGray3: "#C7CACF",
        HahuGray4: "#C4C4C4",
        HahuGray5: "#596474",
        HahuGray6: "#D9D9D9",
        DarkModeBg: "#263142",
        LightDark: "#304159",
        "secondary-lite": "#F1F1F1",
        "HaHuGreen/4": "#E6F5F3",
        "HaHuGreen/2": "#80CBC4",
        "Hahugreen/3": "#B3E0DB",
        ButtonBorder: "#D1D5DB",
        yellow_chips: "#EAB83A",
        yellow_chips_two: "#F7D88C",
        blue_chips: "#1D78C1",
        purple_chips: "#705DA0",
        red_chips: "#EF4444",
        green_chips: "#7DB26D",
        "recrutment-interview": {
          50: "#37AEE2",
          100: "#03A9F4",
        },
        "litepie-primary": {
          50: "#009688",
          100: "#009688",
          200: "#009688",
          300: "#009688",
          400: "#009688",
          500: "#009688",
          600: "#009688",
          700: "#009688",
          800: "#009688",
        }, // color system for light mode
        "litepie-secondary": {
          50: "#444F60",
          100: "#009688",
          200: "#444F60",
          300: "#565656",
          400: "#444F60",
          500: "#444F60",
          600: "#444F60",
          700: "#444F60",
          800: "#444F60",
        },
        "dark-primary": "#02201D",
        "dark-secondary": "#1B2637",
        "dark-secondary-hover": "#1B263730",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ["disabled"],
      cursor: ["disabled"],
      borderWidth: ["last", "focus-within", "first"],
      borderRadius: ["hover"],
      scrollbar: ["rounded"],
    },
    colors: {
      primary: "#f2f2f2",
      "primary-lite": "#6ec8c0",
      "dark": "#2d2d2d",
      "main-bg": "#DCDCDC",
      btngreen: "#23675A",
      dimtxt: "#787878",
      txtclr: "#494949",
      txtgreen: "#4AA492",
      fieldGrey: "#F9F8F8",
      fieldBorder: "#E9E9E9",
      links: "#FFD154"
    }
  },
  plugins: [
    require("tailwindcss-font-inter"),
    require("daisyui"),
    require("@tailwindcss/aspect-ratio"),
    require('@tailwindcss/forms'),
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/typography"),
    // require("tailwind-scrollbar"),
    // require("@tailwindcss/line-clamp"),
  ],
};
