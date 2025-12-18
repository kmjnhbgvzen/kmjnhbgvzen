import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "UI/UX Design Services | User-Focused & Affordable Design – Zentrix Infotech",

  description:
    "Zentrix Infotech offers professional UI/UX design services focused on usability, user experience, and visual clarity to help businesses create engaging digital products.",

  keywords: [
    "ui ux design services",
    "ui ux designing company",
    "user interface design services",
    "user experience design services",
    "professional ui ux designers",
    "affordable ui ux design services",
    "ui ux design for websites and apps",
    "custom ui ux design solutions",
    "ui ux design services for businesses",
    "startup ui ux design company"
  ],

  alternates: {
    canonical: "https://www.zentrixinfotech.com/services/ui-ux-designing",
  },

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

  openGraph: {
    title:
      "UI/UX Design Services | User-Focused & Affordable Design – Zentrix Infotech",
    description:
      "Zentrix Infotech offers professional UI/UX design services focused on usability, user experience, and visual clarity to help businesses create engaging digital products.",
    url: "https://www.zentrixinfotech.com/services/ui-ux-designing",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech UI/UX Design Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "UI/UX Design Services | User-Focused & Affordable Design – Zentrix Infotech",
    description:
      "Zentrix Infotech offers professional UI/UX design services focused on usability, user experience, and visual clarity to help businesses create engaging digital products.",
    images: ["https://zentrixinfotech.com/zentrix_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};



// ✅ ✅ ✅ SERVICES PAGE COMPONENT
const Page = () => {
  return (
    <div>
      <Content />
    </div>
  );
};

export default Page;
