import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";




export const metadata = {
  title:
    "E-commerce Software Development Company in Moradabad | Zentrix",
  description:
    "Zentrix Infotech is a Moradabad software development company for e-commerce. Get custom online stores, marketplaces and apps built to sell. Free consultation.",
  keywords:
    "moradabad software development company for e-commerce, e-commerce development company moradabad, e-commerce software development moradabad, online store development moradabad, custom e-commerce website development, e-commerce app development moradabad, b2b e-commerce platform india, marketplace development company, shopify and wordpress e-commerce developer, payment gateway integration company, e-commerce solutions for exporters, Zentrix Infotech e-commerce",




  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-company-for-e-commerce",
  },




  openGraph: {
    title:
      "E-commerce Software Development Company in Moradabad | Zentrix",
    description:
      "Zentrix Infotech is a Moradabad software development company for e-commerce. Get custom online stores, marketplaces and apps built to sell. Free consultation.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-company-for-e-commerce",
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
      "E-commerce Software Development Company in Moradabad | Zentrix",
    description:
      "Zentrix Infotech is a Moradabad software development company for e-commerce. Get custom online stores, marketplaces and apps built to sell. Free consultation.",
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