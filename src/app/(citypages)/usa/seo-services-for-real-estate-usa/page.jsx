import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Services for Real Estate USA | Zentrix Infotech",
  description:
    "Looking for SEO services for real estate in USA? Learn proven local SEO strategies, IDX website tips, pricing, and how to rank higher for buyer and seller leads.",
  keywords:
    "seo services for real estate usa, real estate seo company, realtor seo services, real estate seo agency near me, real estate digital marketing usa, IDX website seo, property listing seo, real estate agent seo, local seo for realtors, real estate broker seo services",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/seo-services-for-real-estate-usa",
  },
  openGraph: {
    title: "SEO Services for Real Estate USA | Zentrix Infotech",
    description:
      "Looking for SEO services for real estate in USA? Learn proven local SEO strategies, IDX website tips, pricing, and how to rank higher for buyer and seller leads.",
    url: "https://www.zentrixinfotech.com/usa/seo-services-for-real-estate-usa",
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
    title: "SEO Services for Real Estate USA | Zentrix Infotech",
    description:
      "Looking for SEO services for real estate in USA? Learn proven local SEO strategies, IDX website tips, pricing, and how to rank higher for buyer and seller leads.",
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