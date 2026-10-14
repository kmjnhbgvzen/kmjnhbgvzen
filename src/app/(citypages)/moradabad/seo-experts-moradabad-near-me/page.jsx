import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Experts in Moradabad Near Me | Zentrix Infotech",
  description:
    "Looking for SEO experts in Moradabad near you? Zentrix Infotech has a local team for SEO audits, Google Maps ranking and growth. Meet us and get a free audit.",
  keywords:
    "SEO experts Moradabad near me, SEO experts in Moradabad, SEO expert near me, local SEO expert Moradabad, SEO specialist Moradabad, SEO professionals Moradabad, SEO consultant near me Moradabad, hire SEO expert Moradabad, best SEO expert Moradabad, SEO company near me Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/seo-experts-moradabad-near-me",
  },

  openGraph: {
    title: "SEO Experts in Moradabad Near Me | Zentrix Infotech",
    description:
      "Looking for SEO experts in Moradabad near you? Zentrix Infotech has a local team for SEO audits, Google Maps ranking and growth. Meet us and get a free audit.",
    url: "https://www.zentrixinfotech.com/moradabad/seo-experts-moradabad-near-me",
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
    title: "SEO Experts in Moradabad Near Me | Zentrix Infotech",
    description:
      "Looking for SEO experts in Moradabad near you? Zentrix Infotech has a local team for SEO audits, Google Maps ranking and growth. Meet us and get a free audit.",
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