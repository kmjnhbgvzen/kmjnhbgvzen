import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Hire SEO Expert in Lucknow: Scope, KPIs & Reports | Zentrix",


  description:
    "Hire an SEO expert in Lucknow with clear scope, KPIs and reports. Learn what to agree before you start and how Zentrix Infotech measures progress honestly.",


  keywords:
    "hire SEO expert Lucknow, hire SEO expert in Lucknow, hire SEO specialist Lucknow, SEO expert for hire, SEO consultant Lucknow, SEO expert scope of work, SEO KPIs, SEO reporting, monthly SEO expert, SEO audit, local SEO, technical SEO, on-page SEO, Google Business Profile optimization, SEO roadmap, SEO performance review, digital marketing company",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/hire-seo-expert-lucknow",
  },


  openGraph: {
    title: "Hire SEO Expert in Lucknow: Scope, KPIs & Reports | Zentrix",
    description:
      "Hire an SEO expert in Lucknow with clear scope, KPIs and reports. Learn what to agree before you start and how Zentrix Infotech measures progress honestly.",
    url:
      "https://www.zentrixinfotech.com/lucknow/hire-seo-expert-lucknow",
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
    title: "Hire SEO Expert in Lucknow: Scope, KPIs & Reports | Zentrix",
    description:
      "Hire an SEO expert in Lucknow with clear scope, KPIs and reports. Learn what to agree before you start and how Zentrix Infotech measures progress honestly.",
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