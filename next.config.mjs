/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable Edge Runtime for API routes
    experimental: {
      runtime: 'edge',
    },
    // Increase body size limit for API requests if needed
    api: {
      bodyParser: {
        sizeLimit: '1mb'
      }
    }
  }
  
  export default nextConfig;