/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'avatar.vercel.sh', 'upload.wikimedia.org', 't-img.picturehaven.net', 'media.istockphoto.com', 'w7.pngwing.com']
  },
  experimental: {
    serverComponentsExternalPackages: ['@tremor/react']
  }
};

module.exports = nextConfig;
