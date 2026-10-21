import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";




export const metadata = {
  title: "Magento Website Development Company | Zentrix Infotech India",
  description:
    "Zentrix Infotech is a Magento website development company building scalable, secure, feature rich ecommerce stores for growing Indian businesses. Get a free quote.",
  keywords:
    "magento website development company, magento development company india, magento ecommerce development services, custom magento website development, magento store development, magento b2b ecommerce development, magento multi store development, magento theme customization, magento extension development, magento migration services, magento upgrade services, hire magento developers, magento performance optimization, magento payment gateway integration india, magento vs shopify, Zentrix Infotech",




  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/magento-website-development-company",
  },




  openGraph: {
    title: "Magento Website Development Company | Zentrix Infotech India",
    description:
      "Zentrix Infotech is a Magento website development company building scalable, secure, feature rich ecommerce stores for growing Indian businesses. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/magento-website-development-company",
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
    title: "Magento Website Development Company | Zentrix Infotech India",
    description:
      "Zentrix Infotech is a Magento website development company building scalable, secure, feature rich ecommerce stores for growing Indian businesses. Get a free quote.",
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