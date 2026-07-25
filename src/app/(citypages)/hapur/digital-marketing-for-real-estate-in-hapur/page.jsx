import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Real Estate in Hapur | Property Leads Agency",
  description:
    "Looking for digital marketing for real estate in Hapur? Zentrix Infotech generates quality property leads through SEO, ads & website solutions.",
  keywords:
    "digital marketing for real estate in Hapur, real estate marketing agency Hapur, property marketing company, real estate lead generation Hapur, real estate SEO services, property website development company, real estate Google ads agency, real estate social media marketing, real estate digital marketing agency UP, property lead generation services near me, builder marketing agency Hapur, real estate branding services, best real estate marketing company, digital marketing agency Delhi NCR, property portal marketing services",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/digital-marketing-for-real-estate-in-hapur",
  },
  openGraph: {
    title: "Digital Marketing for Real Estate in Hapur | Property Leads Agency",
    description:
      "Looking for digital marketing for real estate in Hapur? Zentrix Infotech generates quality property leads through SEO, ads & website solutions.",
    url: "https://www.zentrixinfotech.com/hapur/digital-marketing-for-real-estate-in-hapur",
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
    title: "Digital Marketing for Real Estate in Hapur | Property Leads Agency",
    description:
      "Looking for digital marketing for real estate in Hapur? Zentrix Infotech generates quality property leads through SEO, ads & website solutions.",
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