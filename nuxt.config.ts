import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/svg'
    ],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    css: [
        '@/assets/fontawesome/css/duotone.css',
        '@/assets/css/app.css'
    ]
})
