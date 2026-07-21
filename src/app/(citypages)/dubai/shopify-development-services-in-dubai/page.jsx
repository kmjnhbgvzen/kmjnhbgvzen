import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Shopify Development Services in Dubai | Custom Shopify Store Design Company",
  description:
    "Expert Shopify development services in Dubai. Get custom, SEO-friendly, secure, and high-converting Shopify stores built to grow your e-commerce business online.",
  keywords:
    "shopify development services in dubai, shopify website development dubai, shopify store design company dubai, custom shopify development uae, shopify ecommerce development dubai, shopify app development dubai, shopify theme customization dubai, affordable shopify development dubai, best shopify developers dubai, shopify seo services dubai, shopify migration services dubai, shopify maintenance services dubai, shopify plus development dubai, dubai shopify agency, ecommerce website development dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/shopify-development-services-in-dubai",
  },

  openGraph: {
    title: "Shopify Development Services in Dubai | Custom Shopify Store Design Company",
    description:
      "Expert Shopify development services in Dubai. Get custom, SEO-friendly, secure, and high-converting Shopify stores built to grow your e-commerce business online.",
    url: "https://www.zentrixinfotech.com/dubai/shopify-development-services-in-dubai",
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
    title: "Shopify Development Services in Dubai | Custom Shopify Store Design Company",
    description:
      "Expert Shopify development services in Dubai. Get custom, SEO-friendly, secure, and high-converting Shopify stores built to grow your e-commerce business online.",
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