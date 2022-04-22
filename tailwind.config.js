module.exports = {
    content: ['./{pages,components,layouts,plugins}/**/*.{vue,js,ts}'],
    theme: {
        extend: {
            aspectRatio: {
                '2/1': '2 / 1',
                '3/1': '3 / 1',
                '5/2': '5 / 2'
            },
        }
    },
    daisyui: {
        themes: [{
            mytheme: {
                "primary": "#E0A82E",
                "secondary": "#F9D72F",
                "accent": "#18182F",
                "neutral": "#18182F",
                "base-100": "#f3f3f3",
                "info": "#3ABFF8",
                "success": "#36D399",
                "warning": "#FBBD23",
                "error": "#F87272",
            },
        }],
    },
    plugins: [
        require('daisyui'),
        require('@tailwindcss/typography')
    ],
}
