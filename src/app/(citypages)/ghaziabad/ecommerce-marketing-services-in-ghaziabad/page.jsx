import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Ecommerce Marketing Services in Ghaziabad | Grow Online Sales 2026",
  description:
    "Looking for ecommerce marketing services in Ghaziabad? Get SEO, PPC, social ads & conversion-focused strategies that boost online store sales & ROI.",
  keywords:
    "ecommerce marketing services in Ghaziabad, ecommerce marketing agency Ghaziabad, ecommerce SEO services Ghaziabad, online store marketing company Ghaziabad, ecommerce PPC agency Ghaziabad, ecommerce social media marketing Ghaziabad, affordable ecommerce marketing agency Ghaziabad, ecommerce website marketing Ghaziabad, Amazon and Flipkart marketing agency Ghaziabad, D2C marketing agency Ghaziabad, ecommerce digital marketing company near me, online marketplace marketing services Ghaziabad, ecommerce conversion rate optimization Ghaziabad, ecommerce branding agency Ghaziabad, Shopify marketing agency Ghaziabad, ecommerce content marketing Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/ecommerce-marketing-services-in-ghaziabad",
  },
  openGraph: {
    title: "Ecommerce Marketing Services in Ghaziabad | Grow Online Sales 2026",
    description:
      "Looking for ecommerce marketing services in Ghaziabad? Get SEO, PPC, social ads & conversion-focused strategies that boost online store sales & ROI.",
    url: "https://www.zentrixinfotech.com/ghaziabad/ecommerce-marketing-services-in-ghaziabad",
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
    title: "Ecommerce Marketing Services in Ghaziabad | Grow Online Sales 2026",
    description:
      "Looking for ecommerce marketing services in Ghaziabad? Get SEO, PPC, social ads & conversion-focused strategies that boost online store sales & ROI.",
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