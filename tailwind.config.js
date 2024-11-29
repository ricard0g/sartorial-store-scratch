/** @type {import('tailwindcss').Config} */

module.exports = {
  prefix: 'tw-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '750px',
      'lg': '990px',
    },
    extend: {
      fontFamily: {
        'heading': 'var(--font-heading-family)'
      },
    },
  },
  plugins: [],
}