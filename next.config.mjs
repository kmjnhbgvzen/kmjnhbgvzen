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
      {
        source: "/web-development",
        destination: "/services/web-development",
        permanent: true, // 301 redirect (SEO-safe)
      },
      {
        source: "/ui-ux-design",
        destination: "/services/ui-ux-designing",
        permanent: true, // 301 redirect (SEO-safe)
      },
      {
        source: "/software-development",
        destination: "/services/software-development",
        permanent: true, // 301 redirect (SEO-safe)
      },
      {
        source: "/cloud-solutions",
        destination: "/services/cloud-solutions",
        permanent: true, // 301 redirect (SEO-safe)
      },
      {
        source: "/logo-branding",
        destination: "/services/ui-ux-designing",
        permanent: true, // 301 redirect (SEO-safe)
      },
    ];
  },
};

export default nextConfig;
