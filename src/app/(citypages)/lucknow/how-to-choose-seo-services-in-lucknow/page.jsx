import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "How to Choose SEO Services in Lucknow | Zentrix Infotech",

  description:
    "Not sure how to choose SEO services in Lucknow? Learn which services fit your goals and budget, what to compare and what to avoid. By Zentrix Infotech.",

  keywords:
    "how to choose SEO services in Lucknow, choose SEO services Lucknow, SEO services Lucknow, which SEO service is best for my business, SEO packages Lucknow, local SEO services Lucknow, SEO services for small business, SEO services comparison, monthly SEO services, SEO audit, on-page SEO, technical SEO, Google Business Profile optimization, content marketing for SEO, SEO reporting, SEO goals, digital marketing company",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/how-to-choose-seo-services-in-lucknow",
  },

  openGraph: {
    title: "How to Choose SEO Services in Lucknow | Zentrix Infotech",
    description:
      "Not sure how to choose SEO services in Lucknow? Learn which services fit your goals and budget, what to compare and what to avoid. By Zentrix Infotech.",
    url:
      "https://www.zentrixinfotech.com/lucknow/how-to-choose-seo-services-in-lucknow",
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
    title: "How to Choose SEO Services in Lucknow | Zentrix Infotech",
    description:
      "Not sure how to choose SEO services in Lucknow? Learn which services fit your goals and budget, what to compare and what to avoid. By Zentrix Infotech.",
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