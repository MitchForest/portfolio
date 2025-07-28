import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.unsplash.com', 
      'i.ytimg.com',
      'cipkxafdqzscmbuy.public.blob.vercel-storage.com' // Vercel Blob storage
    ],
  },
};

export default nextConfig;
