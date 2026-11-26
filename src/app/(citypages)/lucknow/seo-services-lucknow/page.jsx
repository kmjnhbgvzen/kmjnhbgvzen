import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Services in Lucknow for Local Business Growth | Zentrix",

  description:
    "Need SEO services in Lucknow? Zentrix Infotech offers local SEO, on-page SEO, technical audits and content with clear monthly reports. Book a consultation.",

  keywords:
    "seo services lucknow, seo company in lucknow, seo agency lucknow, local seo services lucknow, seo expert in lucknow, affordable seo services lucknow, on-page seo services lucknow, technical seo services lucknow, seo services for small business lucknow, seo cost in lucknow, seo packages lucknow, seo services near me lucknow, google business profile optimization lucknow, ecommerce seo services lucknow, website seo audit lucknow, digital marketing and seo company lucknow, best seo services in lucknow, zentrix infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/seo-services-lucknow",
  },

  openGraph: {
    title: "SEO Services in Lucknow for Local Business Growth | Zentrix",
    description:
      "Need SEO services in Lucknow? Zentrix Infotech offers local SEO, on-page SEO, technical audits and content with clear monthly reports. Book a consultation.",
    url: "https://www.zentrixinfotech.com/lucknow/seo-services-lucknow",
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
    title: "SEO Services in Lucknow for Local Business Growth | Zentrix",
    description:
      "Need SEO services in Lucknow? Zentrix Infotech offers local SEO, on-page SEO, technical audits and content with clear monthly reports. Book a consultation.",
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