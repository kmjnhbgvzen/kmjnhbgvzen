import React from "react";
import KdgoiClient from "./KdgoiClient";

export const metadata = {
  title: "KDGOI Case Study | Educational Institution & Digital Experience | Zentrix Infotech",
  description:
    "Explore how Zentrix Infotech built a unified digital platform for Kamla Devi Group of Institutions (KDGOI) — showcasing academic programs, admissions, campus facilities, student resources, and career pathways.",
  keywords: [
    "KDGOI Case Study",
    "Kamla Devi Group of Institutions",
    "Educational Website Development",
    "College Campus Digital UX",
    "Admissions & Course Portal",
    "Zentrix Infotech Projects",
    "KDEDU Website Design",
    "Higher Education Website India",
  ],
  alternates: {
    canonical: "https://www.zentrixinfotech.com/projects/kdgoi",
  },
  openGraph: {
    title: "KDGOI Case Study | Creating a Unified Digital Experience for Education, Campus Life & Student Opportunities",
    description:
      "A complete case study on how Zentrix Infotech structured Kamla Devi Group of Institutions' digital presence — uniting admissions, academic courses, campus facilities, student resources, and alumni pathways.",
    url: "https://www.zentrixinfotech.com/projects/kdgoi",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764659997/kdedu.org__xfnieg.png",
        width: 1200,
        height: 630,
        alt: "KDGOI Website Case Study Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KDGOI Case Study | Educational Institution Platform by Zentrix Infotech",
    description:
      "See how Zentrix Infotech brought Kamla Devi Group of Institutions' academic offerings, campus life, and student resources into an accessible digital platform.",
    images: [
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764659997/kdedu.org__xfnieg.png",
    ],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function KdgoiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "KDGOI Case Study: Creating a Unified Digital Experience for Education, Campus Life & Student Opportunities",
    description:
      "Zentrix Infotech developed a structured digital experience for Kamla Devi Group of Institutions — presenting academic programs, admission guidelines, campus facilities, student resources, and institutional activities.",
    image:
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764659997/kdedu.org__xfnieg.png",
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
      "@id": "https://www.zentrixinfotech.com/projects/kdgoi",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KdgoiClient />
    </>
  );
}
