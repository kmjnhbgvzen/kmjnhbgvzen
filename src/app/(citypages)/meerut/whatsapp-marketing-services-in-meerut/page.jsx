import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "WhatsApp Marketing Services in Meerut | Zentrix Infotech",
  description:
    "Grow your business with expert WhatsApp marketing services in Meerut from Zentrix Infotech. Generate leads, automate responses, and boost customer engagement today.",
  keywords:
    "WhatsApp marketing services in Meerut, WhatsApp Business API Meerut, WhatsApp marketing agency UP, WhatsApp chatbot services Meerut, click to WhatsApp ads India, WhatsApp broadcast marketing, Zentrix Infotech Meerut, WhatsApp lead generation services, WhatsApp marketing company UP, business WhatsApp automation Meerut, WhatsApp catalog marketing, digital marketing agency Meerut, WhatsApp CRM integration services, conversational marketing agency, WhatsApp marketing Uttar Pradesh",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/whatsapp-marketing-services-in-meerut",
  },
  openGraph: {
    title: "WhatsApp Marketing Services in Meerut | Zentrix Infotech",
    description:
      "Grow your business with expert WhatsApp marketing services in Meerut from Zentrix Infotech. Generate leads, automate responses, and boost customer engagement today.",
    url: "https://www.zentrixinfotech.com/meerut/whatsapp-marketing-services-in-meerut",
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
    title: "WhatsApp Marketing Services in Meerut | Zentrix Infotech",
    description:
      "Grow your business with expert WhatsApp marketing services in Meerut from Zentrix Infotech. Generate leads, automate responses, and boost customer engagement today.",
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