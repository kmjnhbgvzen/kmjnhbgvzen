import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Lucknow SEO Experts | Local & Technical SEO | Zentrix",


  description:
    "SEO experts for Lucknow businesses: Zentrix Infotech offers local SEO, technical fixes and content around your goals, with clear reports and honest timelines.",


  keywords:
    "Lucknow SEO experts, SEO experts in Lucknow, SEO specialist Lucknow, SEO consultant Lucknow, local SEO experts Lucknow, technical SEO expert, hire SEO expert Lucknow, SEO experts for small business, professional SEO experts, SEO audit, local SEO, on-page SEO, technical SEO, Google Business Profile optimization, content marketing for SEO, SEO reporting, digital marketing company",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/lucknow-seo-experts",
  },


  openGraph: {
    title: "Lucknow SEO Experts | Local & Technical SEO | Zentrix",
    description:
      "SEO experts for Lucknow businesses: Zentrix Infotech offers local SEO, technical fixes and content around your goals, with clear reports and honest timelines.",
    url:
      "https://www.zentrixinfotech.com/lucknow/lucknow-seo-experts",
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
    title: "Lucknow SEO Experts | Local & Technical SEO | Zentrix",
    description:
      "SEO experts for Lucknow businesses: Zentrix Infotech offers local SEO, technical fixes and content around your goals, with clear reports and honest timelines.",
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