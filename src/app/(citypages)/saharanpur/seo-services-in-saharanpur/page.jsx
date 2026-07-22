import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Services in Saharanpur | Local SEO, Technical SEO & Rankings",
  description:
    "Get SEO services in Saharanpur for local SEO, technical SEO, content optimization, keyword research, and ranking growth from Zentrix Infotech.",
  keywords:
    "SEO services in Saharanpur, SEO company in Saharanpur, local SEO Saharanpur, technical SEO Saharanpur, keyword research Saharanpur, on-page SEO Saharanpur, content SEO Saharanpur, rank tracking SEO",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/seo-services-in-saharanpur",
  },
  openGraph: {
    title: "SEO Services in Saharanpur | Local SEO, Technical SEO & Rankings",
    description:
      "Get SEO services in Saharanpur for local SEO, technical SEO, content optimization, keyword research, and ranking growth from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/saharanpur/seo-services-in-saharanpur",
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
    title: "SEO Services in Saharanpur | Local SEO, Technical SEO & Rankings",
    description:
      "Get SEO services in Saharanpur for local SEO, technical SEO, content optimization, keyword research, and ranking growth from Zentrix Infotech.",
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