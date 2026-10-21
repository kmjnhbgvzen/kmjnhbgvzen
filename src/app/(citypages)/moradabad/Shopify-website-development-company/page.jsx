import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";




export const metadata = {
  title: "Shopify Website Development Company | Zentrix Infotech India",
  description:
    "Zentrix Infotech is a Shopify website development company building fast, secure, conversion focused online stores for Indian brands. Book a free consultation.",
  keywords:
    "shopify website development company, shopify development company india, shopify store development services, shopify web design company, custom shopify website development, shopify theme customization services, shopify store setup services, hire shopify developers, shopify ecommerce development company, shopify store redesign services, shopify migration services, shopify app integration, shopify payment gateway integration india, affordable shopify development company, shopify store for small business, Zentrix Infotech",




  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/shopify-website-development-company",
  },




  openGraph: {
    title: "Shopify Website Development Company | Zentrix Infotech India",
    description:
      "Zentrix Infotech is a Shopify website development company building fast, secure, conversion focused online stores for Indian brands. Book a free consultation.",
    url: "https://www.zentrixinfotech.com/moradabad/shopify-website-development-company",
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
    title: "Shopify Website Development Company | Zentrix Infotech India",
    description:
      "Zentrix Infotech is a Shopify website development company building fast, secure, conversion focused online stores for Indian brands. Book a free consultation.",
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