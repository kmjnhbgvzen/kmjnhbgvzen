import React from "react";
import MTBossClient from "./MTBossClient";

export const metadata = {
  title: "MTBoss Construction Case Study | Zentrix Infotech",
  description:
    "Explore how Zentrix Infotech built a scalable digital platform for MTBoss Construction, seamlessly integrating building materials and home services.",
  keywords: [
    "MTBoss Construction Case Study",
    "Zentrix Infotech Projects",
    "Construction Website Development",
    "Building Materials Web Platform",
    "Home Services Platform Development",
    "Next.js Construction Portal",
  ],
  alternates: {
    canonical: "https://www.zentrixinfotech.com/projects/mt-boss",
  },
  openGraph: {
    title: "MTBoss Construction Case Study | Zentrix Infotech",
    description:
      "A complete case study on how Zentrix Infotech designed and developed the MTBoss Construction building materials & services platform.",
    url: "https://www.zentrixinfotech.com/projects/mt-boss",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/dxpyhablz/image/upload/v1786521683/www.mtboss.in__Nest_Hub_1_s0qfjy.png",
        width: 1200,
        height: 630,
        alt: "MTBoss Construction Platform Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MTBoss Construction Case Study | Zentrix Infotech",
    description:
      "A complete case study on how Zentrix Infotech designed and developed the MTBoss Construction digital platform.",
    images: [
      "https://res.cloudinary.com/dxpyhablz/image/upload/v1786521683/www.mtboss.in__Nest_Hub_1_s0qfjy.png",
    ],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function MTBossPage() {
  return <MTBossClient />;
}
