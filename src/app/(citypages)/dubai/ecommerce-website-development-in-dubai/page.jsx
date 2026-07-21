import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Ecommerce Website Development in Dubai | Online Store Experts",
  description:
    "Grow your business with expert ecommerce website development in Dubai. Custom online stores, secure payments, fast performance & SEO-ready design.",
  keywords:
    "ecommerce website development in Dubai, ecommerce development company Dubai, online store development Dubai, custom ecommerce website UAE, hire ecommerce developer Dubai, ecommerce web design Dubai, Shopify and WooCommerce development Dubai, ecommerce SEO services Dubai, online shopping website development UAE, best ecommerce agency Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/ecommerce-website-development-in-dubai",
  },

  openGraph: {
    title: "Ecommerce Website Development in Dubai | Online Store Experts",
    description:
      "Grow your business with expert ecommerce website development in Dubai. Custom online stores, secure payments, fast performance & SEO-ready design.",
    url: "https://www.zentrixinfotech.com/dubai/ecommerce-website-development-in-dubai",
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
    title: "Ecommerce Website Development in Dubai | Online Store Experts",
    description:
      "Grow your business with expert ecommerce website development in Dubai. Custom online stores, secure payments, fast performance & SEO-ready design.",
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