import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "WhatsApp Marketing Services in Hapur | Zentrix Infotech",
  description:
    "Result-driven WhatsApp Marketing Services in Hapur to boost customer engagement, drive sales, and build loyalty. Get a free consultation with Zentrix Infotech.",
  keywords:
    "WhatsApp Marketing Services in Hapur, WhatsApp marketing company Hapur, bulk WhatsApp marketing Hapur, WhatsApp business API services Hapur, WhatsApp campaign management Hapur, best WhatsApp marketing company Hapur, WhatsApp marketing services near me, WhatsApp automation services Hapur, ecommerce WhatsApp marketing Hapur, WhatsApp lead generation Hapur, WhatsApp broadcast services Hapur, customer engagement WhatsApp Hapur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/whatsapp-marketing-services-in-hapur",
  },
  openGraph: {
    title: "WhatsApp Marketing Services in Hapur | Zentrix Infotech",
    description:
      "Result-driven WhatsApp Marketing Services in Hapur to boost customer engagement, drive sales, and build loyalty. Get a free consultation with Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/hapur/whatsapp-marketing-services-in-hapur",
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
    title: "WhatsApp Marketing Services in Hapur | Zentrix Infotech",
    description:
      "Result-driven WhatsApp Marketing Services in Hapur to boost customer engagement, drive sales, and build loyalty. Get a free consultation with Zentrix Infotech.",
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