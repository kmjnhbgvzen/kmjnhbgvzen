import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Affordable SEO Services in Lucknow | Zentrix Infotech",

  description:
    "Need affordable SEO services in Lucknow? Zentrix Infotech offers budget-friendly local, on-page and technical SEO with clear scope. Get a free SEO review.",

  keywords:
    "affordable SEO services in Lucknow, cheap SEO services Lucknow, budget SEO company Lucknow, low cost SEO Lucknow, affordable SEO company in Lucknow, SEO packages Lucknow, SEO for small business Lucknow, local SEO services Lucknow, Google Business Profile optimization, on-page SEO services, technical SEO audit, SEO for startups, monthly SEO plan, SEO for shops and clinics, Hinglish keyword SEO, affordable digital marketing Lucknow, SEO reporting, zentrix infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/affordable-seo-services-in-lucknow",
  },

  openGraph: {
    title: "Affordable SEO Services in Lucknow | Zentrix Infotech",
    description:
      "Need affordable SEO services in Lucknow? Zentrix Infotech offers budget-friendly local, on-page and technical SEO with clear scope. Get a free SEO review.",
    url:
      "https://www.zentrixinfotech.com/lucknow/affordable-seo-services-in-lucknow",
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
    title: "Affordable SEO Services in Lucknow | Zentrix Infotech",
    description:
      "Need affordable SEO services in Lucknow? Zentrix Infotech offers budget-friendly local, on-page and technical SEO with clear scope. Get a free SEO review.",
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