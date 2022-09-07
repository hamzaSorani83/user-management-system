/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            flexGrow: {
                '1.4': 1.4
            }
        },
    },
    plugins: [],
}