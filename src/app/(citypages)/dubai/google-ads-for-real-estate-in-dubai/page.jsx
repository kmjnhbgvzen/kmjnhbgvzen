import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Google Ads for Real Estate in Dubai | Property PPC Experts",
  description:
    "Get more property leads with Google Ads for real estate in Dubai. Targeted campaigns for off-plan, ready, and rental listings built to lower cost per lead.",
  keywords:
    "google ads for real estate in dubai, real estate ppc dubai, property ads agency dubai, google ads real estate agency dubai, real estate lead generation dubai, off plan property ads dubai, property ppc management dubai, google ads for property developers dubai, real estate digital marketing dubai, real estate advertising agency uae",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/google-ads-for-real-estate-dubai",
  },

  openGraph: {
    title: "Google Ads for Real Estate in Dubai | Property PPC Experts",
    description:
      "Get more property leads with Google Ads for real estate in Dubai. Targeted campaigns for off-plan, ready, and rental listings built to lower cost per lead.",
    url: "https://www.zentrixinfotech.com/dubai/google-ads-for-real-estate-dubai",
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
    title: "Google Ads for Real Estate in Dubai | Property PPC Experts",
    description:
      "Get more property leads with Google Ads for real estate in Dubai. Targeted campaigns for off-plan, ready, and rental listings built to lower cost per lead.",
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