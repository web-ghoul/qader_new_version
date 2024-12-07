/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')()

module.exports = withNextIntl({
  output: 'export',
  intl: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    localeDetection: false,
    localesPath: 'content', // path to your translation files
  },
})
