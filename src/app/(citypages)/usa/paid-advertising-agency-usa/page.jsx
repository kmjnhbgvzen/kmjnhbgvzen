import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Paid Advertising Agency USA | Expert Multi-Channel Ad Management",
  description:
    "Partner with a results-driven paid advertising agency in the USA. Get expert Google Ads, Facebook Ads, and multi-channel PPC management designed to maximize leads, sales, and ROI.",
  keywords:
    "paid advertising agency usa, ppc agency usa, digital advertising agency usa, paid media management usa, paid ads agency usa, best paid advertising agency usa, multi-channel advertising agency, paid search and social agency, online advertising management usa, paid ads consultant usa",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/paid-advertising-agency-usa",
  },
  openGraph: {
    title: "Paid Advertising Agency USA | Expert Multi-Channel Ad Management",
    description:
      "Partner with a results-driven paid advertising agency in the USA. Get expert Google Ads, Facebook Ads, and multi-channel PPC management designed to maximize leads, sales, and ROI.",
    url: "https://www.zentrixinfotech.com/usa/paid-advertising-agency-usa",
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
    title: "Paid Advertising Agency USA | Expert Multi-Channel Ad Management",
    description:
      "Partner with a results-driven paid advertising agency in the USA. Get expert Google Ads, Facebook Ads, and multi-channel PPC management designed to maximize leads, sales, and ROI.",
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