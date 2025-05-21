/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: false,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "upload.wikimedia.org",
      "cdn.digikala.com",
      "snapp.ir",
      "www.aparat.com",
      "tapsi.ir",
      "www.sb24.ir",
      "maktabkhooneh.org",
      "www.drsaina.com",
      "cafebazaar.ir",
      "divar.ir",
    ],
  },
});

module.exports = nextConfig;
