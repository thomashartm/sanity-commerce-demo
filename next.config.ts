import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    inlineCss: true,
    useCache: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['de', 'en', 'fr'],
    defaultLocale: 'de'
  }
};

export default nextConfig;
