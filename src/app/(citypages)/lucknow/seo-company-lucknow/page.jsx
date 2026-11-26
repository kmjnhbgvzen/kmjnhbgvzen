import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Company in Lucknow | Transparent SEO Plans | Zentrix",

  description:
    "Zentrix Infotech is an SEO company serving Lucknow businesses with local SEO, technical fixes, content and clear monthly reports. Book a consultation.",

  keywords:
    "seo company lucknow, seo company in lucknow, local seo company lucknow, seo agency lucknow, affordable seo company lucknow, seo company near me lucknow, seo company for small business lucknow, digital marketing and seo company lucknow, best seo company in lucknow, how to choose seo company lucknow, seo company vs freelancer lucknow, seo company cost lucknow, seo company packages lucknow, white hat seo company lucknow, seo reporting lucknow, ecommerce seo company lucknow, what does an seo company do, zentrix infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/seo-company-lucknow",
  },

  openGraph: {
    title: "SEO Company in Lucknow | Transparent SEO Plans | Zentrix",
    description:
      "Zentrix Infotech is an SEO company serving Lucknow businesses with local SEO, technical fixes, content and clear monthly reports. Book a consultation.",
    url: "https://www.zentrixinfotech.com/lucknow/seo-company-lucknow",
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
    title: "SEO Company in Lucknow | Transparent SEO Plans | Zentrix",
    description:
      "Zentrix Infotech is an SEO company serving Lucknow businesses with local SEO, technical fixes, content and clear monthly reports. Book a consultation.",
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