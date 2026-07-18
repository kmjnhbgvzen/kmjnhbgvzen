import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Affordable PPC Agency in Dubai | Best Google Ads & PPC Experts",
  description:
    "Looking for an affordable PPC agency in Dubai? Get result-driven Google Ads, Meta Ads & PPC management that boosts leads and lowers cost per click. Free audit.",
  keywords:
    "PPC agency Dubai, Google Ads agency Dubai, cheap PPC services Dubai, best PPC company Dubai, pay per click marketing Dubai, PPC management Dubai, PPC experts UAE, Google Ads management Dubai, affordable digital marketing agency Dubai, PPC advertising company Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/affordable-ppc-agency-dubai",
  },

  openGraph: {
    title: "Affordable PPC Agency in Dubai | Best Google Ads & PPC Experts",
    description:
      "Looking for an affordable PPC agency in Dubai? Get result-driven Google Ads, Meta Ads & PPC management that boosts leads and lowers cost per click. Free audit.",
    url: "https://www.zentrixinfotech.com/dubai/affordable-ppc-agency-dubai",
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
    title: "Affordable PPC Agency in Dubai | Best Google Ads & PPC Experts",
    description:
      "Looking for an affordable PPC agency in Dubai? Get result-driven Google Ads, Meta Ads & PPC management that boosts leads and lowers cost per click. Free audit.",
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