import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "WhatsApp Marketing Services in Saharanpur | Zentrix Infotech",
  description:
    "Zentrix Infotech offers WhatsApp marketing services in Saharanpur — bulk messaging, WhatsApp API, chatbots & campaigns that turn chats into customers.",
  keywords:
    "whatsapp marketing services in Saharanpur, whatsapp marketing company saharanpur, bulk whatsapp marketing saharanpur, whatsapp business api saharanpur, whatsapp marketing agency india, whatsapp chatbot services saharanpur, whatsapp promotional messages service, whatsapp marketing for small business, whatsapp broadcast service india, whatsapp marketing packages saharanpur, digital marketing agency saharanpur, whatsapp catalog setup services, bulk whatsapp sender india, whatsapp marketing cost india, click to whatsapp ads services, whatsapp automation services saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/whatsapp-marketing-services-saharanpur",
  },
  openGraph: {
    title: "WhatsApp Marketing Services in Saharanpur | Zentrix Infotech",
    description:
      "Zentrix Infotech offers WhatsApp marketing services in Saharanpur — bulk messaging, WhatsApp API, chatbots & campaigns that turn chats into customers.",
    url: "https://www.zentrixinfotech.com/saharanpur/whatsapp-marketing-services-saharanpur",
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
    title: "WhatsApp Marketing Services in Saharanpur | Zentrix Infotech",
    description:
      "Zentrix Infotech offers WhatsApp marketing services in Saharanpur — bulk messaging, WhatsApp API, chatbots & campaigns that turn chats into customers.",
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