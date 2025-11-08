/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "res.cloudinary.com",
        "utfs.io",
        "gpo7e0fz6e.ufs.sh",
        "cdn-icons-png.flaticon.com",
        "example.com",
      ],
    },
    eslint: {
      // Ignore ESLint errors during production builds
      ignoreDuringBuilds: true,
    },
    async redirects() {
      return [
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "livofoundation.com",
            },
          ],
          permanent: true,
          destination: "https://www.livofoundation.com/:path*",
        },
      ];
    },
  };
  
  // Change this to ES module export
  export default nextConfig;