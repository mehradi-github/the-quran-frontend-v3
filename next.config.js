/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  reactStrictMode: true,
  swcMinify: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
  //  mySecret: 'secret',
   // secondSecret: process.env.SECOND_SECRET, // Pass through env variables
   
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
   // staticFolder: '/static',
   
  },
}

module.exports = nextConfig
