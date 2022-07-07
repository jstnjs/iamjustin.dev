/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '_includes/**/*.njk',
    'post.njk'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
