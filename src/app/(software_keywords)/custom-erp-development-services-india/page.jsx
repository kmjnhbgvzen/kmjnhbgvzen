import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Custom ERP Development Services India | Zentrix Infotech",
  description:
    "Zentrix Infotech builds custom ERP software in India for manufacturing, retail, healthcare and education. GST-ready, scalable, secure. Get a free quote.",
  keywords:
    "custom ERP development services India, custom ERP software development company India, ERP software development India, bespoke ERP solutions, ERP development company Moradabad, ERP development company Ghaziabad, cloud ERP development India, GST ready ERP software, ERP for manufacturing India, ERP for small business India, ERP integration services, ERP customization services, web based ERP development, ERP modernization, affordable ERP development India",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/custom-erp-development-services-india",
  },
  openGraph: {
    title: "Custom ERP Development Services India | Zentrix Infotech",
    description:
      "Zentrix Infotech builds custom ERP software in India for manufacturing, retail, healthcare and education. GST-ready, scalable, secure. Get a free quote.",
    url: "https://www.zentrixinfotech.com/custom-erp-development-services-india",
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
    title: "Custom ERP Development Services India | Zentrix Infotech",
    description:
      "Zentrix Infotech builds custom ERP software in India for manufacturing, retail, healthcare and education. GST-ready, scalable, secure. Get a free quote.",
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
