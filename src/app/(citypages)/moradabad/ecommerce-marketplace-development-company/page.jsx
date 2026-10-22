import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Ecommerce Marketplace Development Company | Zentrix Infotech",
  description:
    "Zentrix Infotech is an ecommerce marketplace development company building multi-vendor platforms with payments, payouts and dashboards. Get a free quote.",
  keywords:
    "ecommerce marketplace development company, ecommerce marketplace development, multi-vendor marketplace development, multi vendor ecommerce website development, online marketplace development company India, custom marketplace development, B2B marketplace development, B2C marketplace development, marketplace website development, marketplace app development, multi-vendor marketplace cost, ecommerce marketplace software, marketplace development services, build an online marketplace, marketplace development company Moradabad",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/ecommerce-marketplace-development-company",
  },

  openGraph: {
    title:
      "Ecommerce Marketplace Development Company | Zentrix Infotech",
    description:
      "Zentrix Infotech is an ecommerce marketplace development company building multi-vendor platforms with payments, payouts and dashboards. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/ecommerce-marketplace-development-company",
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
      "Ecommerce Marketplace Development Company | Zentrix Infotech",
    description:
      "Zentrix Infotech is an ecommerce marketplace development company building multi-vendor platforms with payments, payouts and dashboards. Get a free quote.",
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