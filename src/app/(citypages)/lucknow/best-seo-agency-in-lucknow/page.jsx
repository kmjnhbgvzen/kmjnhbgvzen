import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best SEO Agency in Lucknow: How to Choose | Zentrix",

  description:
    "Looking for the best SEO agency in Lucknow? Use our checklist to compare agencies, then see how Zentrix Infotech approaches local SEO. Book a consultation.",

  keywords:
    "best seo agency in lucknow, best seo company in lucknow, top seo agency lucknow, seo agency lucknow, local seo agency lucknow, affordable seo agency lucknow, seo agency near me lucknow, seo agency for small business lucknow, how to choose seo agency lucknow, seo agency reviews lucknow, seo agency cost lucknow, white hat seo agency lucknow, seo agency proposal checklist, seo audit lucknow, seo agency vs freelancer lucknow, ecommerce seo agency lucknow, zentrix infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/best-seo-agency-in-lucknow",
  },

  openGraph: {
    title: "Best SEO Agency in Lucknow: How to Choose | Zentrix",
    description:
      "Looking for the best SEO agency in Lucknow? Use our checklist to compare agencies, then see how Zentrix Infotech approaches local SEO. Book a consultation.",
    url:
      "https://www.zentrixinfotech.com/lucknow/best-seo-agency-in-lucknow",
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
    title: "Best SEO Agency in Lucknow: How to Choose | Zentrix",
    description:
      "Looking for the best SEO agency in Lucknow? Use our checklist to compare agencies, then see how Zentrix Infotech approaches local SEO. Book a consultation.",
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