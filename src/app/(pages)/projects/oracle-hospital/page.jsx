import React from "react";
import OracleHospitalClient from "./OracleHospitalClient";

export const metadata = {
  title: "Oracle Eye Hospital Case Study | Healthcare Digital Experience | Zentrix Infotech",
  description:
    "Explore how Zentrix Infotech built a professional digital experience for Oracle Eye Hospital — presenting specialist eye care services, doctor profiles, and patient appointment pathways through a structured, accessible website.",
  keywords: [
    "Oracle Eye Hospital Case Study",
    "Eye Hospital Website Development",
    "Ophthalmology Website Design",
    "Healthcare Website Development",
    "Patient Experience Website",
    "Zentrix Infotech Projects",
    "Hospital Website Design India",
    "Eye Care Digital Experience",
  ],
  alternates: {
    canonical: "https://www.zentrixinfotech.com/projects/oracle-hospital",
  },
  openGraph: {
    title: "Oracle Eye Hospital Case Study | Building a Digital Experience for Advanced Eye Care & Patient Trust",
    description:
      "A complete case study on how Zentrix Infotech designed and developed the professional digital platform for Oracle Eye Hospital — helping patients discover eye care services, specialist doctors, and appointment pathways with confidence.",
    url: "https://www.zentrixinfotech.com/projects/oracle-hospital",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764836261/www.selecthospitalmbd.com__Nest_Hub_Max_2_-min_xnmgmj.png",
        width: 1200,
        height: 630,
        alt: "Oracle Eye Hospital Website Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oracle Eye Hospital Case Study | Eye Care Digital Experience by Zentrix Infotech",
    description:
      "See how Zentrix Infotech transformed Oracle Eye Hospital's ophthalmology services into a professional, patient-focused online experience.",
    images: [
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764836261/www.selecthospitalmbd.com__Nest_Hub_Max_2_-min_xnmgmj.png",
    ],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function OracleHospitalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Oracle Eye Hospital Case Study: Building a Digital Experience for Advanced Eye Care & Patient Trust",
    description:
      "Zentrix Infotech developed a structured digital experience for Oracle Eye Hospital — presenting specialist ophthalmology services, doctor profiles, appointment pathways, and patient educational resources in one professional platform.",
    image:
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764836261/www.selecthospitalmbd.com__Nest_Hub_Max_2_-min_xnmgmj.png",
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
      "@id": "https://www.zentrixinfotech.com/projects/oracle-hospital",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OracleHospitalClient />
    </>
  );
}
