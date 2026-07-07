import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Agency for Indian Businesses in USA | Grow Your Brand Abroad",
  description:
    "Looking for a digital marketing agency for Indian businesses in the USA? Get expert SEO, PPC, social media & branding support to reach American customers effectively.",
  keywords:
    "digital marketing agency for Indian businesses USA, digital marketing services for Indian companies in America, best digital marketing agency for Indian brands, SEO for Indian businesses in USA, PPC agency for Indian companies, social media marketing for Indian businesses abroad, Indian digital marketing agency for US market, online marketing agency for NRI businesses, digital marketing for Indian startups in USA, marketing agency bridging India and USA",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/digital-marketing-agency-for-indian-businesses-in-usa",
  },
  openGraph: {
    title: "Digital Marketing Agency for Indian Businesses in USA | Grow Your Brand Abroad",
    description:
      "Looking for a digital marketing agency for Indian businesses in the USA? Get expert SEO, PPC, social media & branding support to reach American customers effectively.",
    url: "https://www.zentrixinfotech.com/usa/digital-marketing-agency-for-indian-businesses-in-usa",
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
    title: "Digital Marketing Agency for Indian Businesses in USA | Grow Your Brand Abroad",
    description:
      "Looking for a digital marketing agency for Indian businesses in the USA? Get expert SEO, PPC, social media & branding support to reach American customers effectively.",
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