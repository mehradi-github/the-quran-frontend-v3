/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
  //  mySecret: 'secret',
   // secondSecret: process.env.SECOND_SECRET, // Pass through env variables
   baseUrlApi:'https://api.quran.com/api/v4'
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
   // staticFolder: '/static',
  },
}

module.exports = nextConfig
