import React from "react";
import BuyzaarClient from "./BuyzaarClient";

export const metadata = {
  title: "The Buyzaar Mart Case Study | Zentrix Infotech",
  description:
    "Explore how Zentrix Infotech engineered a scalable retail and franchise-focused digital platform for The Buyzaar Mart, unifying modern retail operations and investor onboarding.",
  keywords: [
    "The Buyzaar Mart Case Study",
    "Retail Web Platform Development",
    "Supermarket Franchise Portal",
    "Zentrix Infotech Case Studies",
    "Grocery Digital Architecture",
    "Next.js Retail Platform",
  ],
  alternates: {
    canonical: "https://www.zentrixinfotech.com/projects/buyzaar",
  },
  openGraph: {
    title: "The Buyzaar Mart Case Study | Zentrix Infotech",
    description:
      "A deep dive into how Zentrix Infotech designed and developed the unified retail, store network, and franchise platform for The Buyzaar Mart.",
    url: "https://www.zentrixinfotech.com/projects/buyzaar",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764833084/www.thebuyzaarmart.com__Nest_Hub_Max_2_-min_paneko.png",
        width: 1200,
        height: 630,
        alt: "The Buyzaar Mart Digital Platform Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Buyzaar Mart Case Study | Zentrix Infotech",
    description:
      "How Zentrix Infotech created a scalable digital retail ecosystem for The Buyzaar Mart.",
    images: [
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764833084/www.thebuyzaarmart.com__Nest_Hub_Max_2_-min_paneko.png",
    ],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function BuyzaarPage() {
  return <BuyzaarClient />;
}
