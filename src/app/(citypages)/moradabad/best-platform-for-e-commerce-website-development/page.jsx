import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Platform for Ecommerce Website Development | Zentrix",
  description:
    "Compare Shopify, WooCommerce, Magento, Next.js, Laravel and MERN to find the best platform for ecommerce website development. Expert advice from Zentrix Infotech.",
  keywords:
    "best platform for ecommerce website development, best ecommerce platform for small business, best ecommerce platform in India, ecommerce platform comparison, Shopify vs WooCommerce, Shopify vs Magento, WooCommerce vs Magento, custom ecommerce development vs Shopify, best platform for online store, how to choose an ecommerce platform, ecommerce website development company, Next.js ecommerce development, MERN stack ecommerce, Laravel ecommerce development, headless ecommerce platform, best ecommerce platform for B2B, best ecommerce platform for handicraft exporters, ecommerce platform for startups, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-platform-for-e-commerce-website-development",
  },

  openGraph: {
    title: "Best Platform for Ecommerce Website Development | Zentrix",
    description:
      "Compare Shopify, WooCommerce, Magento, Next.js, Laravel and MERN to find the best platform for ecommerce website development. Expert advice from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/best-platform-for-e-commerce-website-development",
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
    title: "Best Platform for Ecommerce Website Development | Zentrix",
    description:
      "Compare Shopify, WooCommerce, Magento, Next.js, Laravel and MERN to find the best platform for ecommerce website development. Expert advice from Zentrix Infotech.",
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