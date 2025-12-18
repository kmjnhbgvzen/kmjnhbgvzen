import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Mobile App Development Services | Android & iOS Solutions – Zentrix Infotech",

  description:
    "Zentrix Infotech provides professional mobile app development services for Android and iOS, delivering secure, scalable, and user-friendly applications for businesses.",

  keywords: [
    "mobile app development services",
    "android app development company",
    "ios app development company",
    "custom mobile app development",
    "mobile application development services",
    "affordable mobile app development",
    "business mobile app solutions",
    "professional app development company",
    "android and ios app developers",
    "mobile app development for businesses"
  ],

  alternates: {
    canonical: "https://www.zentrixinfotech.com/services/mobile-app-development",
  },

  openGraph: {
    title:
      "Mobile App Development Services | Android & iOS Solutions – Zentrix Infotech",
    description:
      "Zentrix Infotech provides professional mobile app development services for Android and iOS, delivering secure, scalable, and user-friendly applications for businesses.",
    url: "https://www.zentrixinfotech.com/services/mobile-app-development",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Mobile App Development Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Mobile App Development Services | Android & iOS Solutions – Zentrix Infotech",
    description:
      "Zentrix Infotech provides professional mobile app development services for Android and iOS, delivering secure, scalable, and user-friendly applications for businesses.",
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
