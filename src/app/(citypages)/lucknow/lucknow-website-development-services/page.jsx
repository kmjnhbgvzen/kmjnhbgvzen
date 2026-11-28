import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Lucknow Website Development Service | Zentrix Infotech",

  description:
    "Get end-to-end website development service in Lucknow: planning, design, development, launch and support from Zentrix Infotech. Call us to get started.",

  keywords: [
    "Lucknow website development service",
    "website development service in Lucknow",
    "end-to-end website development Lucknow",
    "website development service provider Lucknow",
    "professional website development service",
    "custom website development service Lucknow",
    "e-commerce website development service Lucknow",
    "website design and development service Lucknow",
    "website development process",
    "website launch and support",
    "website care plan",
    "website handover checklist",
    "website development company Lucknow",
  ],

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/lucknow-website-development-services",
  },

  openGraph: {
    title: "Lucknow Website Development Service | Zentrix Infotech",
    description:
      "Get end-to-end website development service in Lucknow: planning, design, development, launch and support from Zentrix Infotech. Call us to get started.",
    url:
      "https://www.zentrixinfotech.com/lucknow/lucknow-website-development-services",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lucknow Website Development Service | Zentrix Infotech",
    description:
      "Get end-to-end website development service in Lucknow: planning, design, development, launch and support from Zentrix Infotech. Call us to get started.",
    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },

  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function Page() {
  return (
    <>
      <Banner />
      <Client />
      <Content />
      <WhyChooseUs />
      <LandingServices />
      <Portfolio />
      <LovedByClients />
    </>
  );
}