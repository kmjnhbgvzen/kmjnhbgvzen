import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Affordable Ecommerce Website Development in Moradabad | Zentrix",
  description:
    "Get affordable ecommerce website development in Moradabad from Zentrix Infotech. Budget-friendly, mobile-first online stores with UPI, COD and SEO included.",
  keywords:
    "affordable ecommerce website development in Moradabad, low cost ecommerce website Moradabad, budget ecommerce website developer, cheap online store development Moradabad, ecommerce website cost in Moradabad, affordable Shopify store Moradabad, affordable WooCommerce website, small business ecommerce website, startup ecommerce website development, ecommerce website under budget, ecommerce website packages Moradabad, value for money ecommerce development, affordable online shop for small business, ecommerce website pricing India, low budget online store with payment gateway",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/affordable-ecommerce-website-development-in-moradabad",
  },

  openGraph: {
    title:
      "Affordable Ecommerce Website Development in Moradabad | Zentrix",
    description:
      "Get affordable ecommerce website development in Moradabad from Zentrix Infotech. Budget-friendly, mobile-first online stores with UPI, COD and SEO included.",
    url: "https://www.zentrixinfotech.com/moradabad/affordable-ecommerce-website-development-in-moradabad",
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
      "Affordable Ecommerce Website Development in Moradabad | Zentrix",
    description:
      "Get affordable ecommerce website development in Moradabad from Zentrix Infotech. Budget-friendly, mobile-first online stores with UPI, COD and SEO included.",
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