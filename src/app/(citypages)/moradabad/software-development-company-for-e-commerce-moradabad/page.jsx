import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Software Development Company for E-commerce Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a Moradabad software development company for e-commerce: custom online stores, marketplaces, payments and delivery tools. Get a free quote.",
  keywords:
    "software development company for e-commerce moradabad, e-commerce software development moradabad, custom e-commerce development moradabad, online store development moradabad, e-commerce marketplace development moradabad, b2b e-commerce portal for exporters, e-commerce website with payment gateway, multi vendor marketplace development india, d2c e-commerce development, shopify and custom e-commerce developers moradabad, e-commerce mobile app development, order and delivery management software, e-commerce development cost moradabad, software development company moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-development-company-for-e-commerce-moradabad",
  },

  openGraph: {
    title:
      "Software Development Company for E-commerce Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a Moradabad software development company for e-commerce: custom online stores, marketplaces, payments and delivery tools. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-company-for-e-commerce-moradabad",
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
      "Software Development Company for E-commerce Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a Moradabad software development company for e-commerce: custom online stores, marketplaces, payments and delivery tools. Get a free quote.",
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