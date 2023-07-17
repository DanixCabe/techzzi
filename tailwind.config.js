/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {},
        screens: {
            '3xl': {'min': '1920px'},
            '2xl': {'min': '1535px'},
            'xl': {'min': '1279px'},
            'lg': {'min': '1023px'},
            'md': {'min': '767px'},
            'sm': {'min': '560px'},
            'xs': {'min': '360px'},
            'xxs': {'min': '1px', max: '359px'},
          }
    },
    plugins: [],
}