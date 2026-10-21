import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";



export const metadata = {
  title: "Shopify Website Developer Near Me Moradabad | Zentrix Infotech",
  description:
    "Need a Shopify website developer near you in Moradabad? Zentrix Infotech builds fast, secure, mobile friendly Shopify stores that sell. Book a free consultation.",
  keywords:
    "shopify website developer near me moradabad, shopify developer moradabad, shopify website development moradabad, shopify store development company moradabad, hire shopify developer moradabad, shopify web design moradabad, shopify developer near me, affordable shopify developer, custom shopify store development, shopify theme customization, shopify store setup moradabad, shopify store for small business, shopify store redesign, shopify payment gateway setup india, shopify vs custom ecommerce website, Zentrix Infotech",



  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/shopify-website-developer-near-me-moradabad",
  },



  openGraph: {
    title: "Shopify Website Developer Near Me Moradabad | Zentrix Infotech",
    description:
      "Need a Shopify website developer near you in Moradabad? Zentrix Infotech builds fast, secure, mobile friendly Shopify stores that sell. Book a free consultation.",
    url: "https://www.zentrixinfotech.com/moradabad/shopify-website-developer-near-me-moradabad",
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
    title: "Shopify Website Developer Near Me Moradabad | Zentrix Infotech",
    description:
      "Need a Shopify website developer near you in Moradabad? Zentrix Infotech builds fast, secure, mobile friendly Shopify stores that sell. Book a free consultation.",
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