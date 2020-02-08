const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
    theme: {},
    variants: {},
    plugins: [
        require('tailwindcss'),
        cssnano({
            preset: 'default'
        }),
        purgecss({
            content: ['./client/src/index.html'],
            css: ['./client/src/css/styles.css'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })
    ]
}