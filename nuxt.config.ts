import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "Download Software for free. 100% Safe Apps",
    htmlAttrs: { 'lang': 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'description', content: 'Downloading software is simple and safe. All the programs at your reach, antivirus, music, video, recording and much more' },
      { name: 'robots', content: 'all' }
    ]
  },

  app: {
    buildAssetsDir: '/_iman/'
  },

  runtimeConfig: {
    supabaseKey: '',
    public: {
      supabaseUrl: ''
    }
  },

  experimental: {
    reactivityTransform: true
  },

  css: [
    '@/assets/main.css',
  ],

  buildModules: [
    '@pinia/nuxt'
  ],

  modules: [],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  }
})
