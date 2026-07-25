import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "WhatsApp Marketing Services in Ghaziabad | Zentrix Infotech",
  description:
    "Best WhatsApp marketing services in Ghaziabad by Zentrix Infotech. Bulk messaging, chatbots, broadcast campaigns & lead generation to grow your business.",
  keywords:
    "whatsapp marketing services in ghaziabad, whatsapp marketing agency ghaziabad, whatsapp business api ghaziabad, bulk whatsapp marketing company, whatsapp marketing company near me, whatsapp chatbot services ghaziabad, whatsapp broadcast marketing india, whatsapp marketing for small business, digital marketing agency ghaziabad, whatsapp lead generation services",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/whatsapp-marketing-services-in-ghaziabad",
  },
  openGraph: {
    title: "WhatsApp Marketing Services in Ghaziabad | Zentrix Infotech",
    description:
      "Best WhatsApp marketing services in Ghaziabad by Zentrix Infotech. Bulk messaging, chatbots, broadcast campaigns & lead generation to grow your business.",
    url: "https://www.zentrixinfotech.com/ghaziabad/whatsapp-marketing-services-in-ghaziabad",
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
    title: "WhatsApp Marketing Services in Ghaziabad | Zentrix Infotech",
    description:
      "Best WhatsApp marketing services in Ghaziabad by Zentrix Infotech. Bulk messaging, chatbots, broadcast campaigns & lead generation to grow your business.",
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