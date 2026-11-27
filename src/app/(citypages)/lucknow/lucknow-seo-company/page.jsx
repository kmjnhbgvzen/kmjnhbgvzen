import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Lucknow SEO Company | SEO for Every Business | Zentrix",


  description:
    "Zentrix Infotech is an SEO company for Lucknow businesses: local shops, B2B firms, e-commerce stores and more. Clear plans, plain reports and honest timelines.",


  keywords:
    "Lucknow SEO company, SEO company in Lucknow, SEO company Lucknow, local SEO company Lucknow, SEO agency Lucknow, SEO services Lucknow, e-commerce SEO Lucknow, B2B SEO company, SEO company for small business, SEO audit, local SEO, technical SEO, on-page SEO, Google Business Profile optimization, content marketing for SEO, multi-location SEO, digital marketing company",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/lucknow-seo-company",
  },


  openGraph: {
    title: "Lucknow SEO Company | SEO for Every Business | Zentrix",
    description:
      "Zentrix Infotech is an SEO company for Lucknow businesses: local shops, B2B firms, e-commerce stores and more. Clear plans, plain reports and honest timelines.",
    url:
      "https://www.zentrixinfotech.com/lucknow/lucknow-seo-company",
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
    title: "Lucknow SEO Company | SEO for Every Business | Zentrix",
    description:
      "Zentrix Infotech is an SEO company for Lucknow businesses: local shops, B2B firms, e-commerce stores and more. Clear plans, plain reports and honest timelines.",
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