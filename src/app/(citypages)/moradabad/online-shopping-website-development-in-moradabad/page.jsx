import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Online Shopping Website Development in Moradabad | Zentrix",
  description:
    "Launch your online shopping website with Zentrix Infotech in Moradabad. Fast, secure, mobile-friendly stores with UPI, COD, shipping and SEO built in.",
  keywords:
    "online shopping website development in Moradabad, online shopping website Moradabad, shopping website developer Moradabad, create online shopping website, online store development Moradabad, shopping cart website development, ecommerce shopping website design, build online shopping website India, Shopify shopping website Moradabad, WooCommerce shopping website, multi-vendor shopping website, online shopping app and website, shopping website with UPI payment, affordable online shopping website, online shopping website cost Moradabad",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/online-shopping-website-development-in-moradabad",
  },

  openGraph: {
    title:
      "Online Shopping Website Development in Moradabad | Zentrix",
    description:
      "Launch your online shopping website with Zentrix Infotech in Moradabad. Fast, secure, mobile-friendly stores with UPI, COD, shipping and SEO built in.",
    url: "https://www.zentrixinfotech.com/moradabad/online-shopping-website-development-in-moradabad",
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
      "Online Shopping Website Development in Moradabad | Zentrix",
    description:
      "Launch your online shopping website with Zentrix Infotech in Moradabad. Fast, secure, mobile-friendly stores with UPI, COD, shipping and SEO built in.",
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