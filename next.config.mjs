/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'], // Add Cloudinary domain to allowed list
    },
};

export default nextConfig;