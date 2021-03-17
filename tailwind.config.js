module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                indigo: {
                    light: '#8e9ffc',
                    DEFAULT: '#5464bd',
                    dark: '#2e3766',
                },
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
