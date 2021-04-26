module.exports = {
    purge: [
        "./public/**/*.{vue,js,ts,jsx,tsx,blade.php,html}",
        "./resources/**/*.{vue,js,ts,jsx,tsx,blade.php,html}",
    ],
    mode: "jit",
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                nunito: ["Nunito", "Arial", "sans-serif"],
            },
            textColor: ["focus", "active"],
            boxShadow: {
                "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/aspect-ratio"),
    ],
};
