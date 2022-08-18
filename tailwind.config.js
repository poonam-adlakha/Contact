const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.red,
        secondary: colors.gray,
        complementary: colors.blue,
        neutral: colors.neutral,
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      minHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
        '1/2vw': '50vw',
      },
      gridTemplateColumns: {
        faq: '1rem auto 1rem',
      },
      keyframes: {
        inout: {
          '0%, 100%': { width: 0 },
          '20%, 80%': { width: '100px' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      boxShadow: {
        'xl-even': '0 5px 35px 5px rgba(0, 0, 0, 0.1), 0 5px 10px 5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        typing: 'inout 4.5s steps(8, end) infinite',
        blink: 'blink .75s ease infinite',
      },
      translate: ['group-hover', 'group-focus'],
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              'background-color': colors.gray[300],
              color: colors.gray[800],
              'border-radius': '4px',
              'font-size': '85%',
              margin: '0 2px',
              padding: '.2em .4em',
              'font-family': 'monospace',
              'font-weight': 'normal',
            },
            section: {
              'padding-top': '5rem',
            },
            h1: {
              color: colors.gray[800],
              'margin-top': 0,
              'margin-bottom': '0.5em',
            },
            h2: {
              color: colors.gray[800],
              'margin-top': '1.25em',
              'margin-bottom': '0.5em',
            },
            h3: {
              color: colors.gray[800],
            },
            h4: {
              color: colors.gray[800],
            },
            p: {
              color: colors.gray[800],
              'margin-top': '0.5em',
              'margin-bottom': '0.5em',
            },
            a: {
              color: colors.red[600],
            },
            img: {
              'margin-top': 0,
              'margin-bottom': 0,
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
