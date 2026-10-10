import React from "react";
import BalpradaClient from "./BalpradaClient";

export const metadata = {
  title: "Balprada Ashram Case Study | Holistic Ayurvedic & Community Care | Zentrix Infotech",
  description:
    "Discover how Zentrix Infotech built a unified digital experience for Balprada Ashram & Research Center — integrating traditional Ayurvedic care, Panchakarma, herbal wellness, and Jansewa community initiatives.",
  keywords: [
    "Balprada Ashram Case Study",
    "Ayurvedic Hospital Website Design",
    "Holistic Wellness Web Development",
    "Panchakarma Website India",
    "Healthcare & Seva Digital Platform",
    "Zentrix Infotech Projects",
    "Ayurveda Research Center Website",
    "Jansewa Digital Experience",
  ],
  alternates: {
    canonical: "https://www.zentrixinfotech.com/projects/balprada-ashram",
  },
  openGraph: {
    title: "Balprada Ashram Case Study | Bringing Ayurveda, Holistic Wellness & Community Care Into a Unified Digital Experience",
    description:
      "A complete case study on how Zentrix Infotech organized Balprada Ashram's multifaceted ecosystem of Ayurvedic care, Panchakarma, herbal wellness, and Jansewa initiatives into a clear, trustworthy website.",
    url: "https://www.zentrixinfotech.com/projects/balprada-ashram",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/dxpyhablz/image/upload/v1786517145/balprada_logo_qeeg9m.png",
        width: 1200,
        height: 630,
        alt: "Balprada Ashram Website Case Study Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balprada Ashram Case Study | Ayurvedic Healthcare & Community Care by Zentrix Infotech",
    description:
      "See how Zentrix Infotech transformed Balprada Ashram's Ayurvedic healthcare, wellness programs, and social initiatives into a unified digital experience.",
    images: [
      "https://res.cloudinary.com/dxpyhablz/image/upload/v1786517145/balprada_logo_qeeg9m.png",
    ],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function BalpradaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Balprada Ashram Case Study: Bringing Ayurveda, Holistic Wellness & Community Care Into a Unified Digital Experience",
    description:
      "Zentrix Infotech created a coherent, accessible digital journey for Balprada Ayurvedic Hospital & Research Center — organizing Ayurvedic consultations, Panchakarma, herbal products, and community service initiatives.",
    image:
      "https://res.cloudinary.com/dxpyhablz/image/upload/v1786517145/balprada_logo_qeeg9m.png",
    author: {
      "@type": "Organization",
      name: "Zentrix Infotech",
      url: "https://www.zentrixinfotech.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Zentrix Infotech",
      logo: {
        "@type": "ImageObject",
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.zentrixinfotech.com/projects/balprada-ashram",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BalpradaClient />
    </>
  );
}
