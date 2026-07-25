import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "WhatsApp Marketing Services in Muzaffarnagar | Boost Sales & Leads",
  description:
    "Get result-driven WhatsApp Marketing Services in Muzaffarnagar. Bulk messaging, WhatsApp API, catalog & chatbot automation to grow your local business fast.",
  keywords:
    "whatsapp marketing services in muzaffarnagar, whatsapp marketing agency muzaffarnagar, bulk whatsapp marketing muzaffarnagar, whatsapp business api muzaffarnagar, whatsapp marketing company muzaffarnagar, best whatsapp marketing services near me, whatsapp chatbot services muzaffarnagar, digital marketing agency muzaffarnagar, whatsapp broadcast marketing, whatsapp marketing for small business, whatsapp automation services india, whatsapp catalog marketing, whatsapp marketing packages muzaffarnagar",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/muzaffarnagar/whatsapp-marketing-services-in-muzaffarnagar",
  },
  openGraph: {
    title: "WhatsApp Marketing Services in Muzaffarnagar | Boost Sales & Leads",
    description:
      "Get result-driven WhatsApp Marketing Services in Muzaffarnagar. Bulk messaging, WhatsApp API, catalog & chatbot automation to grow your local business fast.",
    url: "https://www.zentrixinfotech.com/muzaffarnagar/whatsapp-marketing-services-in-muzaffarnagar",
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
    title: "WhatsApp Marketing Services in Muzaffarnagar | Boost Sales & Leads",
    description:
      "Get result-driven WhatsApp Marketing Services in Muzaffarnagar. Bulk messaging, WhatsApp API, catalog & chatbot automation to grow your local business fast.",
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