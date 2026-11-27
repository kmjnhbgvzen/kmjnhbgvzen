import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Local SEO Company Near Me in Lucknow | Zentrix Infotech",


  description:
    "Looking for a local SEO company near you in Lucknow? Learn how map and near me results work and how Zentrix Infotech helps you get found locally. Talk to us.",


  keywords:
    "local SEO company near me Lucknow, local SEO company Lucknow, local SEO services near me, local SEO agency Lucknow, Google Business Profile optimization Lucknow, map pack SEO, near me SEO, local SEO for small business, local search company Lucknow, Google Maps ranking, local listings, online reviews, local pages, NAP consistency, local SEO audit, mobile SEO, digital marketing company",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/local-seo-company-near-me-lucknow",
  },


  openGraph: {
    title: "Local SEO Company Near Me in Lucknow | Zentrix Infotech",
    description:
      "Looking for a local SEO company near you in Lucknow? Learn how map and near me results work and how Zentrix Infotech helps you get found locally. Talk to us.",
    url:
      "https://www.zentrixinfotech.com/lucknow/local-seo-company-near-me-lucknow",
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
    title: "Local SEO Company Near Me in Lucknow | Zentrix Infotech",
    description:
      "Looking for a local SEO company near you in Lucknow? Learn how map and near me results work and how Zentrix Infotech helps you get found locally. Talk to us.",
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