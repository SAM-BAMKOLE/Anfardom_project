/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["views/**/*.html"],
    theme: {
        extend: {
            fontSize: {
                xs: "10px",
                base: "13px",
                lg: "21px",
                xl: "34px",
            },
            colors: {
                white: "#FFFFFF",
                "light-green": "#ecfdf5",
                dark: "#292524",
                green: "#059669",
                brown: "#7C2D12",
            },
            fontFamily: {
                inter: ["'Be Vietnam Pro', sans-serif"],
            },
        },
    },
    plugins: [],
};
