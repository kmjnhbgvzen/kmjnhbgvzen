import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Custom ERP Development Cost in India (2026 Guide) | Zentrix Infotech",

  description:
    "How much does custom ERP development cost in India? Get transparent pricing, modular cost breakdown, cost comparison, and free estimates from Zentrix Infotech.",

  keywords: [
    "custom ERP development cost India",
    "ERP development cost in India",
    "cost to build custom ERP software",
    "custom ERP software pricing India",
    "ERP software development price",
    "manufacturing ERP development cost",
    "custom ERP development services India",
    "ERP development company India",
    "custom ERP development cost Moradabad",
  ],

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/custom-erp-development-cost-india",
  },

  openGraph: {
    title: "Custom ERP Development Cost in India (2026 Guide) | Zentrix Infotech",
    description:
      "How much does custom ERP development cost in India? Get transparent pricing, modular cost breakdown, cost comparison, and free estimates from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/custom-erp-development-cost-india",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Custom ERP Development Cost in India | Zentrix Infotech",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Custom ERP Development Cost in India (2026 Guide) | Zentrix Infotech",
    description:
      "How much does custom ERP development cost in India? Get transparent pricing, modular cost breakdown, cost comparison, and free estimates from Zentrix Infotech.",
    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },

  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function Page() {
  return (
    <main>
      <Banner />
      <Client />
      <Content />
      <WhyChooseUs />
      <LandingServices />
      <Portfolio />
      <LovedByClients />
    </main>
  );
}
