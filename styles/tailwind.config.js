module.exports = {
    purge: {
        content: ['_site/**/*.html'],
        options: {
            safelist: [],
        },
    },
    darkMode: false,
    theme: {
        extend: {
            colors: {
                change: 'black',
            },
            fontFamily: {
                'header': ['"Arvo"'],
                'subheader': ['"Montserrat"'],
                'paragraph': ['"Karma"']
            }
        },
    },
    variants: {},
    plugins: [],
}
