import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Shopify Development Services USA | Zentrix Infotech",
  description:
    "Zentrix Infotech provides expert Shopify development services for USA brands, building fast, conversion-focused, and fully customized online stores that drive sales.",
  keywords:
    "Shopify development services USA, Shopify developers for US business, custom Shopify store development USA, hire Shopify developer USA, Shopify theme customization USA, Shopify app development services, Shopify store design company USA, affordable Shopify development USA, Shopify migration services USA, best Shopify development agency for small business",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/shopify-development-services-usa",
  },
  openGraph: {
    title: "Shopify Development Services USA | Zentrix Infotech",
    description:
      "Zentrix Infotech provides expert Shopify development services for USA brands, building fast, conversion-focused, and fully customized online stores that drive sales.",
    url: "https://www.zentrixinfotech.com/usa/shopify-development-services-usa",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Services USA | Zentrix Infotech",
    description:
      "Zentrix Infotech provides expert Shopify development services for USA brands, building fast, conversion-focused, and fully customized online stores that drive sales.",
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