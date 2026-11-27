import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best SEO Services in Lucknow: What to Expect | Zentrix",

  description:
    "Looking for the best SEO services in Lucknow? See what great SEO includes, how to judge quality, and how Zentrix Infotech helps businesses get more enquiries.",

  keywords:
    "best SEO services in Lucknow, SEO services Lucknow, top SEO services Lucknow, professional SEO services Lucknow, local SEO services Lucknow, SEO company in Lucknow, quality SEO services, SEO services for small business, affordable SEO services Lucknow, technical SEO, on-page SEO, Google Business Profile optimization, content marketing for SEO, SEO audit, SEO reporting, local search visibility, digital marketing company",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/best-seo-services-in-lucknow",
  },

  openGraph: {
    title: "Best SEO Services in Lucknow: What to Expect | Zentrix",
    description:
      "Looking for the best SEO services in Lucknow? See what great SEO includes, how to judge quality, and how Zentrix Infotech helps businesses get more enquiries.",
    url: "https://www.zentrixinfotech.com/lucknow/best-seo-services-in-lucknow",
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
    title: "Best SEO Services in Lucknow: What to Expect | Zentrix",
    description:
      "Looking for the best SEO services in Lucknow? See what great SEO includes, how to judge quality, and how Zentrix Infotech helps businesses get more enquiries.",
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