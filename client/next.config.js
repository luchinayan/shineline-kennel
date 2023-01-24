const nextTranslate = require('next-translate')
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  images: {
    domains: ["storage.googleapis.com", "storage.cloud.google.com"]
  },
  ...nextTranslate()

}

module.exports = nextConfig
