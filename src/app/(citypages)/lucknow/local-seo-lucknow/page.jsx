import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Local SEO Lucknow | Google Maps Ranking | Zentrix Infotech",

  description:
    "Get found by nearby customers with local SEO in Lucknow. Zentrix Infotech improves your Google Business Profile, reviews and local pages. Book a free review.",

  keywords:
    "local SEO Lucknow, local SEO services in Lucknow, local SEO company Lucknow, Google Maps SEO Lucknow, Google Business Profile optimization Lucknow, near me SEO Lucknow, local SEO expert Lucknow, local SEO for small business Lucknow, local citations, NAP consistency, local map pack, review management, area-wise SEO pages, local schema markup, Hinglish local keywords, SEO for clinics and shops, local search ranking factors",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/local-seo-lucknow",
  },

  openGraph: {
    title: "Local SEO Lucknow | Google Maps Ranking | Zentrix Infotech",

    description:
      "Get found by nearby customers with local SEO in Lucknow. Zentrix Infotech improves your Google Business Profile, reviews and local pages. Book a free review.",

    url: "https://www.zentrixinfotech.com/lucknow/local-seo-lucknow",
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
    title: "Local SEO Lucknow | Google Maps Ranking | Zentrix Infotech",

    description:
      "Get found by nearby customers with local SEO in Lucknow. Zentrix Infotech improves your Google Business Profile, reviews and local pages. Book a free review.",

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