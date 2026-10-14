import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "SEO Company Moradabad 2026 | Zentrix Infotech",
  description:
    "Looking for an SEO company in Moradabad in 2026? Learn the latest SEO trends, services and how to choose the right agency. Talk to Zentrix Infotech today.",
  keywords:
    "SEO company Moradabad 2026, SEO company in Moradabad, best SEO company Moradabad 2026, SEO services Moradabad 2026, local SEO Moradabad, SEO trends 2026 India, AI search SEO Moradabad, voice search SEO Moradabad, Google Business Profile optimization Moradabad, SEO agency Moradabad, SEO for small business Moradabad, digital marketing company Moradabad, affordable SEO company Moradabad, SEO expert Moradabad, Zentrix Infotech SEO",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/seo-company-moradabad-2026",
  },


  openGraph: {
    title: "SEO Company Moradabad 2026 | Zentrix Infotech",
    description:
      "Looking for an SEO company in Moradabad in 2026? Learn the latest SEO trends, services and how to choose the right agency. Talk to Zentrix Infotech today.",
    url: "https://www.zentrixinfotech.com/moradabad/seo-company-moradabad-2026",
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
    title: "SEO Company Moradabad 2026 | Zentrix Infotech",
    description:
      "Looking for an SEO company in Moradabad in 2026? Learn the latest SEO trends, services and how to choose the right agency. Talk to Zentrix Infotech today.",
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