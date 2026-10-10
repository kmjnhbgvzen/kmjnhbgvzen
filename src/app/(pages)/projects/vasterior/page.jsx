import React from "react";
import VasteriorClient from "./VasteriorClient";

export const metadata = {
  title: "Vasterior Case Study | Interior Design & MahaVastu Digital Experience | Zentrix Infotech",
  description:
    "Explore how Zentrix Infotech crafted a premium digital experience for Vasterior — a multidisciplinary interior design and MahaVastu consultancy studio — through a structured, visually refined website.",
  keywords: [
    "Vasterior Case Study",
    "Interior Design Website Development",
    "MahaVastu Consultancy Website",
    "Vastu Aligned Interior Design",
    "Spatial Planning Website Design",
    "Zentrix Infotech Projects",
    "Interior Architecture Website",
    "Luxury Interior Design Portfolio",
  ],
  alternates: {
    canonical: "https://www.zentrixinfotech.com/projects/vasterior",
  },
  openGraph: {
    title: "Vasterior Case Study | Designing a Digital Space for Thoughtful Interiors & Vastu-Aligned Living",
    description:
      "A complete case study on how Zentrix Infotech designed and developed the premium digital platform for Vasterior, combining architectural visuals with structured interior design service discovery.",
    url: "https://www.zentrixinfotech.com/projects/vasterior",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764762213/www.vasterior.com__Nest_Hub_Max_-min_j0vfbc.png",
        width: 1200,
        height: 630,
        alt: "Vasterior Interior Design Website Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasterior Case Study | Interior Design & MahaVastu Digital Experience by Zentrix Infotech",
    description:
      "See how Zentrix Infotech transformed Vasterior's interior design and MahaVastu consultancy services into an elegant, image-led online experience.",
    images: [
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764762213/www.vasterior.com__Nest_Hub_Max_-min_j0vfbc.png",
    ],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function VasteriorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Vasterior Case Study: Designing a Digital Space for Thoughtful Interiors & Vastu-Aligned Living",
    description:
      "Zentrix Infotech developed a digital experience designed to showcase Vasterior's multidisciplinary interior design and MahaVastu consultancy services, communicate the brand's philosophy, and help prospective clients explore spatial design possibilities.",
    image:
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764762213/www.vasterior.com__Nest_Hub_Max_-min_j0vfbc.png",
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
      "@id": "https://www.zentrixinfotech.com/projects/vasterior",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VasteriorClient />
    </>
  );
}
