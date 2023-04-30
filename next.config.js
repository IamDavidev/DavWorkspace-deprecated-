// (https://avatars.githubusercontent.com/u/85713808?v=4)
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains: ["avatars.githubusercontent.com"]    
  }
}

module.exports = nextConfig
