import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Affordable SEO Agency for USA Clients",
  description:
    "Looking for an affordable SEO agency for USA clients? Get transparent pricing, proven strategies, and real results without overspending on SEO.",
  keywords:
    "affordable seo agency for usa clients, budget seo agency usa, cheap seo services usa, low cost seo agency usa, affordable seo company usa, affordable seo services usa, best affordable seo agency, small business affordable seo, seo agency for usa clients, cost effective seo services, affordable seo experts usa, budget friendly seo company",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/usa/affordable-seo-agency-usa-clients",
  },
  openGraph: {
    title: "Affordable SEO Agency for USA Clients",
    description:
      "Looking for an affordable SEO agency for USA clients? Get transparent pricing, proven strategies, and real results without overspending on SEO.",
    url: "https://www.zentrixinfotech.com/usa/affordable-seo-agency-usa-clients",
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
    title: "Affordable SEO Agency for USA Clients",
    description:
      "Looking for an affordable SEO agency for USA clients? Get transparent pricing, proven strategies, and real results without overspending on SEO.",
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