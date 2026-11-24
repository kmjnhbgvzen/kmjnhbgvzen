import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Ecommerce Website Development Company in Lucknow | Zentrix Infotech",
  description:
    "Ecommerce website development company in Lucknow. Zentrix Infotech builds fast, secure online stores with payments, SEO and easy order management. Free quote.",
  keywords:
    "ecommerce website development company in Lucknow, ecommerce website development Lucknow, ecommerce development company Lucknow, online store development Lucknow, ecommerce website design Lucknow, custom ecommerce development Lucknow, ecommerce developers in Lucknow, build online store Lucknow, ecommerce website cost Lucknow, ecommerce SEO Lucknow, payment gateway integration Lucknow, mobile friendly ecommerce website Lucknow, B2B ecommerce website Lucknow, affordable ecommerce website Lucknow",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/ecommerce-website-development-company-in-lucknow",
  },

  openGraph: {
    title:
      "Ecommerce Website Development Company in Lucknow | Zentrix Infotech",
    description:
      "Ecommerce website development company in Lucknow. Zentrix Infotech builds fast, secure online stores with payments, SEO and easy order management. Free quote.",
    url:
      "https://www.zentrixinfotech.com/lucknow/ecommerce-website-development-company-in-lucknow",
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
      "Ecommerce Website Development Company in Lucknow | Zentrix Infotech",
    description:
      "Ecommerce website development company in Lucknow. Zentrix Infotech builds fast, secure online stores with payments, SEO and easy order management. Free quote.",
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