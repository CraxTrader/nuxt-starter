module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./composables/**/*.{js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./server/**/*.{js,ts}"
  ],
  theme: {
    fontFamily: {
      'display': ['Signika', 'sans-serif']
    },
    extend: {
      colors: {
        'classic-blue': '#34568B',
        'blue-izis': '#5B5EA6',
        'french-blue': '#0072B5',
        'true-red': '#BC243C',
        'chili-pepper': '#9B2335',
        'tigerlily': '#E15D44',
        'living-coral': '#FF6F61',
        'ultra-violet': '#6B5B95',
        'greenery': '#88B04B',
        'emerald': '#009B77',
        'tangerine-tango': '#DD4124',
        'turquoise': '#45B8AC',
        'mimosa': '#EFC050',
        'aqua-sky': '#7FCDCD',
        'fuchsia-rose': '#C3447A',
        'mint': '#00A170'
      }
    },
    container: {
      center: true,
    },
  },

  important: true,

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp')
  ],
}