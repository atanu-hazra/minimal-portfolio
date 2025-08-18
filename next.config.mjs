/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'res.cloudinary.com',
                pathname: '/**',
            },
        ],
        minimumCacheTTL: 60,
    },
};

export default nextConfig;
