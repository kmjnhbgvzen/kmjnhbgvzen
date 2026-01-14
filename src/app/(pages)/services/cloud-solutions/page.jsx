import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Cloud Solutions & Services | Scalable Cloud Infrastructure – Zentrix Infotech",

  description:
    "Zentrix Infotech delivers reliable cloud solutions including cloud hosting, deployment, migration, and management to help businesses scale securely and efficiently.",

  keywords: [
    "cloud solutions services",
    "cloud computing services company",
    "cloud deployment services",
    "cloud migration solutions",
    "managed cloud services",
    "business cloud infrastructure",
    "scalable cloud solutions",
    "secure cloud hosting services",
    "cloud services for businesses",
    "professional cloud solutions provider"
  ],

  alternates: {
    canonical: "https://www.zentrixinfotech.com/services/cloud-solutions",
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
      "Cloud Solutions & Services | Scalable Cloud Infrastructure – Zentrix Infotech",
    description:
      "Zentrix Infotech delivers reliable cloud solutions including cloud hosting, deployment, migration, and management to help businesses scale securely and efficiently.",
    url: "https://www.zentrixinfotech.com/services/cloud-solutions",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Cloud Solutions & Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Cloud Solutions & Services | Scalable Cloud Infrastructure – Zentrix Infotech",
    description:
      "Zentrix Infotech delivers reliable cloud solutions including cloud hosting, deployment, migration, and management to help businesses scale securely and efficiently.",
    images: ["https://zentrixinfotech.com/zentrix_logo.jpg"],
  },

  icons: {
    icon: "/favicon-v2.ico",
  },
};



//SERVICES PAGE COMPONENT
const Page = () => {
  return (
    <div>
      <Content />
    </div>
  );
};

export default Page;
