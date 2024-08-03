/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/:path*',
            destination: 'https://sunev.me/:path*',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
