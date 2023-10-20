/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        //darkBgTheme: "#1E1E1E",
        //darkBgTheme: "#000000",
        darkBgTheme: "#1B1717",
        darkBaseTheme: "#3C3C44",
        baseTheme: "#2E2E47",
        bgTheme: "#464567",
        btnTheme: "#605F8E",
        green: "#1DFF9E",
        blue: "#3bdcf1",
        yellow: "#e8eeb4",
        textColor: "#1DFF9E",
        textDark: "#030b0d",
        textLignt: "#e4eaeb",
      },
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        heading: "Nova Flat",
        body: "Nova Flat",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
    },
  },
  plugins: [],
};
