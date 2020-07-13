const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './content/**/*.html',
    './content/**/*.md',
    './resources/**/*.html',
    './resources/**/*.md',
  ],
  theme: {
    typography: {
      default: {
        css: {
        },
      },
    },
    fontFamily: {
      'sans': [
        'Open Sans', ...defaultTheme.fontFamily.sans
      ],
      'serif': [
        ...defaultTheme.fontFamily.serif
      ],
      'mono': [
        ...defaultTheme.fontFamily.mono
      ],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      //'xl': '1280px',
    },
    extend: {
      listStyleType: {
        circle: 'circle',
      },

    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/ui')
  ]
}