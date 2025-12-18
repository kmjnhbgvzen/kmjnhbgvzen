/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/whychooseus",
        destination: "/why-choose-us",
        permanent: true, // 301 redirect
      },
      {
        source: "/digital-marketing",
        destination: "/services/digital-marketing",
        permanent: true, // 301 redirect (SEO-safe)
      },
      {
        source: "/mobile-development",
        destination: "/services/mobile-development",
        permanent: true, // 301 redirect (SEO-safe)
      },
    ];
  },
};

export default nextConfig;
