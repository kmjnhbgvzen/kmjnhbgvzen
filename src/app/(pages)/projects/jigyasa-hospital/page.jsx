import React from "react";
import JigyasaHospitalClient from "./JigyasaHospitalClient";

export const metadata = {
  title: "Jigyasa Hospital Case Study | Multispeciality Healthcare Digital Experience | Zentrix Infotech",
  description:
    "Explore how Zentrix Infotech designed a connected digital experience for Jigyasa Hospital Moradabad — organizing multispeciality care, doctor profiles, hospital facilities, emergency care, and patient appointment pathways.",
  keywords: [
    "Jigyasa Hospital Case Study",
    "Multispeciality Hospital Website Design",
    "Healthcare Website Development Moradabad",
    "Hospital Doctor Directory UX",
    "Patient Experience Digital Platform",
    "Zentrix Infotech Projects",
    "Jigyasa Hospital Moradabad",
    "Medical Specialties Website",
  ],
  alternates: {
    canonical: "https://www.zentrixinfotech.com/projects/jigyasa-hospital",
  },
  openGraph: {
    title: "Jigyasa Hospital Case Study | Building a Connected Digital Experience for Multispeciality Healthcare",
    description:
      "A complete case study on how Zentrix Infotech structured Jigyasa Hospital's digital presence — presenting 18+ medical specialties, specialist doctors, diagnostic facilities, and 24/7 emergency contact information.",
    url: "https://www.zentrixinfotech.com/projects/jigyasa-hospital",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764749287/jigyasahospital.com_-min_frvs9d.png",
        width: 1200,
        height: 630,
        alt: "Jigyasa Hospital Website Case Study Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jigyasa Hospital Case Study | Multispeciality Healthcare UX by Zentrix Infotech",
    description:
      "See how Zentrix Infotech transformed Jigyasa Hospital's multispeciality care, doctor profiles, and emergency services into an accessible, patient-oriented website.",
    images: [
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764749287/jigyasahospital.com_-min_frvs9d.png",
    ],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function JigyasaHospitalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Jigyasa Hospital Case Study: Building a Connected Digital Experience for Multispeciality Healthcare",
    description:
      "Zentrix Infotech developed a structured digital experience for Jigyasa Hospital in Moradabad — presenting medical departments, doctor directories, diagnostic facilities, emergency care, and patient appointment pathways.",
    image:
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764749287/jigyasahospital.com_-min_frvs9d.png",
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
      "@id": "https://www.zentrixinfotech.com/projects/jigyasa-hospital",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <JigyasaHospitalClient />
    </>
  );
}
