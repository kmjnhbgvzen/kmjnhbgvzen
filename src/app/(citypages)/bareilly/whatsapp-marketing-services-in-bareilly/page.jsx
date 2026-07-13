import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "WhatsApp Marketing Services in Bareilly | Get More Leads & Sales",
  description:
    "Grow your business in Bareilly with expert WhatsApp marketing — bulk campaigns, automation, catalogue sharing and instant customer engagement that drives real sales.",
  keywords:
    "WhatsApp marketing services in Bareilly, WhatsApp marketing agency Bareilly, WhatsApp business API Bareilly, bulk WhatsApp marketing, WhatsApp automation services, WhatsApp lead generation, WhatsApp marketing company India, best digital marketing agency Bareilly, WhatsApp catalogue marketing, WhatsApp broadcast services, WhatsApp CRM for business",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/bareilly/whatsapp-marketing-services-bareilly",
  },

  openGraph: {
    title: "WhatsApp Marketing Services in Bareilly | Get More Leads & Sales",
    description:
      "Grow your business in Bareilly with expert WhatsApp marketing — bulk campaigns, automation, catalogue sharing and instant customer engagement that drives real sales.",
    url: "https://www.zentrixinfotech.com/bareilly/whatsapp-marketing-services-bareilly",
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
    title: "WhatsApp Marketing Services in Bareilly | Get More Leads & Sales",
    description:
      "Grow your business in Bareilly with expert WhatsApp marketing — bulk campaigns, automation, catalogue sharing and instant customer engagement that drives real sales.",
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