import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Best SEO Company in Lucknow: How to Judge | Zentrix",


  description:
    "Searching for the best SEO company in Lucknow? Learn the myths to avoid, the proof to ask for and how Zentrix Infotech plans SEO that targets real enquiries.",


  keywords:
    "best SEO company in Lucknow, top SEO company Lucknow, best SEO agency Lucknow, SEO company in Lucknow, trusted SEO company Lucknow, professional SEO company, local SEO company Lucknow, SEO company for small business, SEO company reviews, SEO audit, local SEO, technical SEO, on-page SEO, Google Business Profile optimization, content marketing for SEO, SEO reporting, digital marketing company",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/best-seo-company-in-lucknow",
  },


  openGraph: {
    title: "Best SEO Company in Lucknow: How to Judge | Zentrix",
    description:
      "Searching for the best SEO company in Lucknow? Learn the myths to avoid, the proof to ask for and how Zentrix Infotech plans SEO that targets real enquiries.",
    url:
      "https://www.zentrixinfotech.com/lucknow/best-seo-company-in-lucknow",
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
    title: "Best SEO Company in Lucknow: How to Judge | Zentrix",
    description:
      "Searching for the best SEO company in Lucknow? Learn the myths to avoid, the proof to ask for and how Zentrix Infotech plans SEO that targets real enquiries.",
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