import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "WhatsApp Marketing Services in Dubai | Boost Leads & Sales",
  description:
    "Grow your business with expert WhatsApp marketing services in Dubai. Automated broadcasts, bulk messaging & chatbots that turn conversations into real sales.",
  keywords:
    "WhatsApp marketing services in Dubai, WhatsApp business marketing Dubai, bulk WhatsApp marketing UAE, WhatsApp API services Dubai, WhatsApp chatbot Dubai, WhatsApp marketing agency Dubai, WhatsApp business API UAE, WhatsApp lead generation Dubai, best WhatsApp marketing company Dubai, WhatsApp broadcast marketing UAE",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/whatsapp-marketing-services-in-dubai",
  },

  openGraph: {
    title: "WhatsApp Marketing Services in Dubai | Boost Leads & Sales",
    description:
      "Grow your business with expert WhatsApp marketing services in Dubai. Automated broadcasts, bulk messaging & chatbots that turn conversations into real sales.",
    url: "https://www.zentrixinfotech.com/dubai/whatsapp-marketing-services-in-dubai",
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
    title: "WhatsApp Marketing Services in Dubai | Boost Leads & Sales",
    description:
      "Grow your business with expert WhatsApp marketing services in Dubai. Automated broadcasts, bulk messaging & chatbots that turn conversations into real sales.",
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