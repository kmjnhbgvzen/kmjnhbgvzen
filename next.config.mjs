/** @type {import('next').NextConfig} */
const nextConfig = {
  /* ---------------- IMAGE CONFIG (Cloudinary + Unsplash) ---------------- */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**",
      },
    ],
  },

  /* ---------------- REDIRECTS (SEO-SAFE 301) ---------------- */
  async redirects() {
    return [
      {
        source: "/whychooseus",
        destination: "/why-choose-us",
        permanent: true,
      },
      {
        source: "/digital-marketing",
        destination: "/services/digital-marketing",
        permanent: true,
      },
      {
        source: "/mobile-development",
        destination: "/services/mobile-development",
        permanent: true,
      },
      {
        source: "/web-development",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/ui-ux-design",
        destination: "/services/ui-ux-designing",
        permanent: true,
      },
      {
        source: "/software-development",
        destination: "/services/software-development",
        permanent: true,
      },
      {
        source: "/cloud-solutions",
        destination: "/services/cloud-solutions",
        permanent: true,
      },
      {
        source: "/logo-branding",
        destination: "/services/ui-ux-designing",
        permanent: true,
      },

      {
        source: "/blog-content-1",
        destination: "/blog",
        permanent: true,
      },
       {
        source: "/blog-content-2",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog-content-3",
        destination: "/blog",
        permanent: true,
      },
       {
        source: "/blog/1",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
