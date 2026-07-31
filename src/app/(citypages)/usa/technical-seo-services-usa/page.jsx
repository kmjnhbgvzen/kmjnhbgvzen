 import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Technical SEO Services in USA | Fix Site Issues, Boost Rankings",
  description:
    "Professional technical SEO services in the USA to fix crawl errors, speed, indexing, and Core Web Vitals issues so your website ranks higher and converts better.",
  keywords:
    "technical SEO services USA, technical SEO audit, website speed optimization, Core Web Vitals services, crawl error fixing, technical SEO agency USA, site indexing services, technical SEO company, structured data services, technical SEO consultant",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/technical-seo-services-usa",
  },
  openGraph: {
    title: "Technical SEO Services in USA | Fix Site Issues, Boost Rankings",
    description:
      "Professional technical SEO services in the USA to fix crawl errors, speed, indexing, and Core Web Vitals issues so your website ranks higher and converts better.",
    url: "https://www.zentrixinfotech.com/usa/technical-seo-services-usa",
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
    title: "Technical SEO Services in USA | Fix Site Issues, Boost Rankings",
    description:
      "Professional technical SEO services in the USA to fix crawl errors, speed, indexing, and Core Web Vitals issues so your website ranks higher and converts better.",
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