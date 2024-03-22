/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#F26D21',
            },
            backgroundColor: {
                'btn-primary': '#F26D21',
                second: '#f1f3f5',
                primary: 'white',
            },
            borderColor: {
                primary: '#B6B6B6',
            },
            borderRadius: {
                primary: '8px',
            },
            height: {
                header: '72px',
            },
            margin: {
                header: '72px',
            },
            padding: {
                header: '72px',
            },
        },
    },
    plugins: [],
};
