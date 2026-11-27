import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Hire SEO Experts in Lucknow Near Me | Zentrix Infotech",

  description:
    "Looking for SEO experts in Lucknow near you? Zentrix Infotech offers local SEO, technical SEO and content for Lucknow businesses. Talk to our team today.",

  keywords:
    "SEO experts in Lucknow near me, SEO experts Lucknow, SEO company in Lucknow, local SEO experts Lucknow, SEO services Lucknow, SEO specialist Lucknow, hire SEO expert Lucknow, SEO consultant Lucknow, local SEO Lucknow, Google Business Profile optimization, SEO for small businesses, website optimization services, technical SEO services, on-page SEO services, content marketing for SEO, SEO audit Lucknow, digital marketing company",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/seo-experts-in-lucknow-near-me",
  },

  openGraph: {
    title: "Hire SEO Experts in Lucknow Near Me | Zentrix Infotech",
    description:
      "Looking for SEO experts in Lucknow near you? Zentrix Infotech offers local SEO, technical SEO and content for Lucknow businesses. Talk to our team today.",
    url: "https://www.zentrixinfotech.com/lucknow/seo-experts-in-lucknow-near-me",
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
    title: "Hire SEO Experts in Lucknow Near Me | Zentrix Infotech",
    description:
      "Looking for SEO experts in Lucknow near you? Zentrix Infotech offers local SEO, technical SEO and content for Lucknow businesses. Talk to our team today.",
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