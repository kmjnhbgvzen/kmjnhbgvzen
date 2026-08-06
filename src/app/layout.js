import "./globals.css";
import Script from "next/script";

import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import ContactsButton from "@/components/ContactsButton";
import PopupForm from "@/components/PopupForm";

// ✅ GLOBAL SEO (MERGES with page-level metadata)
export const metadata = {
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon-v2.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  },
};

// ✅ ORGANIZATION SCHEMA
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zentrix Infotech",
  url: "https://www.zentrixinfotech.com/",
  foundingDate: "2025",
  logo: {
    "@type": "ImageObject",
    url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761370086/bg_remove_logo_zentrix_gn8ybw.png",
    width: 512,
    height: 512,
  },
  description:
    "Zentrix Infotech is a Website Development, Custom Software, and Digital Marketing company transforming ideas into powerful digital solutions for businesses worldwide.",
  email: "info@zentrixinfotech.com",
  telephone: ["+91-72488-00839", "+91-63970-36898"],
  address: [
    {
  "@type": "PostalAddress",
  "streetAddress": "12/11, Buddhi Vihar Phase 2",
  "addressLocality": "Moradabad",
  "addressRegion": "Uttar Pradesh",
  "postalCode": "244001",
  "addressCountry": "IN"
},
    {
      "@type": "PostalAddress",
      streetAddress: "A-20, Sunshine Apartment",
      addressLocality: "Ghaziabad",
      addressRegion: "Uttar Pradesh",
      postalCode: "201013",
      addressCountry: "IN",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-72488-00839",
      contactType: "Sales",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-63970-36898",
      contactType: "Support",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/zentrixinfotech.in/",
    "https://www.linkedin.com/company/zentrix-infotech",
    "https://www.instagram.com/zentrixinfotech",
    "https://wa.me/916397036898",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          url: "https://www.zentrixinfotech.com/services/web-development",
          description:
            "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Designing",
          url: "https://www.zentrixinfotech.com/services/ui-ux-designing",
          description:
            "Beautiful, intuitive interfaces designed to engage users and drive conversions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          url: "https://www.zentrixinfotech.com/services/mobile-development",
          description:
            "Native and cross-platform mobile applications for iOS and Android.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Software Development",
          url: "https://www.zentrixinfotech.com/services/software-development",
          description:
            "Comprehensive software solutions to improve efficiency and drive innovation.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Marketing",
          url: "https://www.zentrixinfotech.com/services/digital-marketing",
          description:
            "Strategic digital marketing campaigns to boost online presence and drive measurable business growth.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud Solutions",
          url: "https://www.zentrixinfotech.com/services/cloud-solutions",
          description:
            "Scalable cloud infrastructure and services to enhance performance, security, and business continuity.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "270",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ EXTRA SAFETY FOR GOOGLE */}
        <link rel="icon" href="/favicon-v2.ico" sizes="48x48" />

        {/* ✅ GOOGLE SITE VERIFICATION
        <meta
          name="google-site-verification"
          content="NrE50hHl6c-azA8AW6DpgA0bwM54EcK2iL3JOBRgX4Q"
        /> */}

        {/* ✅ ORGANIZATION SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* ✅ END ORGANIZATION SCHEMA */}

        
        {/* <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W6ZK9ZLC');
            `,
          }}
        /> */}
        
      </head>

      <body className="bg-[#FFFAFA]">
        {/* ✅ GTM (noscript) */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W6ZK9ZLC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript> */}
        {/* ✅ END GTM (noscript) */}

        <Topbar />
        <Navbar />
        {children}
        <Footer />
        <ContactsButton />
        <PopupForm />
      </body>
    </html>
  );
}