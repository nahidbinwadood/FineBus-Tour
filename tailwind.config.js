/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', 'sans-serif'",
        poppins: "'Poppins', 'sans-serif'",
        roboto: "'Roboto', 'sans-serif'",
        arizonia: "'Arizonia', 'cursive'",
        manrope: "'Manrope', 'sans-serif'",
      },
      colors: {
        primary: "#1CA8CB",
        secondary: "#FF5108",
        textColor: "#113D48",
        paragraphColor: "#666565",
        grayText: "#6C6C6C",
        primarybgColor: "#E9F6F9",
        secondaryBgColor: "#FFF5ED",
        tagColor: "#FF5108",
        borderColor: "#DADADA",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1536px",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1100px",
          "2xl": "1380px",
        },
      },
    },
  },
  plugins: [],
};
