import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Off-Page SEO Services USA | Build Authority & Rank Higher",
  description:
    "Professional off-page SEO services in the USA to build backlinks, brand authority, and trust signals. Improve rankings with proven, white-hat strategies.",
  keywords:
    "off-page seo services usa, off page seo company usa, link building services usa, backlink building services, off page seo agency, guest posting services usa, digital pr for seo, off page optimization services, white hat link building usa, off page seo experts, domain authority building services, off page seo strategy usa",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/usa/off-page-seo-services-usa",
  },
  openGraph: {
    title: "Off-Page SEO Services USA | Build Authority & Rank Higher",
    description:
      "Professional off-page SEO services in the USA to build backlinks, brand authority, and trust signals. Improve rankings with proven, white-hat strategies.",
    url: "https://www.zentrixinfotech.com/usa/off-page-seo-services-usa",
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
    title: "Off-Page SEO Services USA | Build Authority & Rank Higher",
    description:
      "Professional off-page SEO services in the USA to build backlinks, brand authority, and trust signals. Improve rankings with proven, white-hat strategies.",
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