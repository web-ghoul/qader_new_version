/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')()

module.exports = withNextIntl({
  output: 'export',
  experimental: {
    webpackBuildWorker: true,
  },
  intl: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    localeDetection: false,
    localesPath: 'content',
  },
})
