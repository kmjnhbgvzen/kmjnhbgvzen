import React from "react";
import BuyzaarClient from "../buyzaar/BuyzaarClient";

export const metadata = {
  title: "The Buyzaar Mart Case Study | Zentrix Infotech",
  description:
    "Explore how Zentrix Infotech engineered a scalable retail and franchise-focused digital platform for The Buyzaar Mart.",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/projects/the-buyzaar-mart",
  },
  openGraph: {
    title: "The Buyzaar Mart Case Study | Zentrix Infotech",
    description:
      "A deep dive into how Zentrix Infotech designed and developed the unified retail, store network, and franchise platform for The Buyzaar Mart.",
    url: "https://www.zentrixinfotech.com/projects/the-buyzaar-mart",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764833084/www.thebuyzaarmart.com__Nest_Hub_Max_2_-min_paneko.png",
      },
    ],
  },
};

export default function TheBuyzaarMartPage() {
  return <BuyzaarClient />;
}
