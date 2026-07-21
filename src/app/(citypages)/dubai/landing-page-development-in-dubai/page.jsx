import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Landing Page Development in Dubai | High-Converting Pages",
  description:
    "Expert landing page development in Dubai for ads & campaigns. Fast, conversion-focused, mobile-friendly pages built to turn clicks into leads and sales.",
  keywords:
    "landing page development in Dubai, landing page design Dubai, high converting landing page UAE, PPC landing page developer Dubai, campaign landing page company Dubai, lead generation landing page Dubai, landing page design company UAE, custom landing page development Dubai, hire landing page designer Dubai, best landing page company Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/landing-page-development-in-dubai",
  },

  openGraph: {
    title: "Landing Page Development in Dubai | High-Converting Pages",
    description:
      "Expert landing page development in Dubai for ads & campaigns. Fast, conversion-focused, mobile-friendly pages built to turn clicks into leads and sales.",
    url: "https://www.zentrixinfotech.com/dubai/landing-page-development-in-dubai",
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
    title: "Landing Page Development in Dubai | High-Converting Pages",
    description:
      "Expert landing page development in Dubai for ads & campaigns. Fast, conversion-focused, mobile-friendly pages built to turn clicks into leads and sales.",
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