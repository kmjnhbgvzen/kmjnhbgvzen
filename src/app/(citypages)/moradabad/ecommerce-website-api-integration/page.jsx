import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Ecommerce Website API Integration Services | Zentrix",
  description:
    "Connect your online store to payments, shipping, ERP, CRM and more with ecommerce website API integration from Zentrix Infotech. Secure, scalable, reliable.",
  keywords:
    "ecommerce website API integration, ecommerce API integration services, API integration for online store, third-party API integration ecommerce, custom API development for ecommerce, shipping API integration, payment API integration, ERP integration for ecommerce, CRM integration ecommerce website, inventory sync API, REST API ecommerce integration, ecommerce automation, ecommerce API integration company, ecommerce website integration services, headless commerce API integration",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/ecommerce-website-api-integration",
  },

  openGraph: {
    title:
      "Ecommerce Website API Integration Services | Zentrix",
    description:
      "Connect your online store to payments, shipping, ERP, CRM and more with ecommerce website API integration from Zentrix Infotech. Secure, scalable, reliable.",
    url: "https://www.zentrixinfotech.com/moradabad/ecommerce-website-api-integration",
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
    title:
      "Ecommerce Website API Integration Services | Zentrix",
    description:
      "Connect your online store to payments, shipping, ERP, CRM and more with ecommerce website API integration from Zentrix Infotech. Secure, scalable, reliable.",
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