import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "National SEO Services USA | Rank Across the Country",
  description:
    "Professional national SEO services in the USA to help your business rank nationwide. Boost visibility, traffic, and leads with a proven national SEO strategy.",
  keywords:
    "national seo services usa, national seo company usa, national seo agency, nationwide seo services, national seo strategy usa, enterprise seo services usa, national seo experts, national seo optimization, best national seo company, national seo consultant usa, large scale seo services, national keyword ranking services",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/usa/national-seo-services-usa",
  },
  openGraph: {
    title: "National SEO Services USA | Rank Across the Country",
    description:
      "Professional national SEO services in the USA to help your business rank nationwide. Boost visibility, traffic, and leads with a proven national SEO strategy.",
    url: "https://www.zentrixinfotech.com/usa/national-seo-services-usa",
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
    title: "National SEO Services USA | Rank Across the Country",
    description:
      "Professional national SEO services in the USA to help your business rank nationwide. Boost visibility, traffic, and leads with a proven national SEO strategy.",
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