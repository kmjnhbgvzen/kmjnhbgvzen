import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Google Ads Agency in Dubai | Certified PPC Experts for Real Growth",
  description:
    "Partner with a results-driven Google Ads agency in Dubai. Search, Shopping, Display & Performance Max campaigns built to lower CPA and grow ROI. Get a free audit.",
  keywords:
    "google ads agency in dubai, google ads management dubai, google ads company dubai, ppc agency dubai, google adwords agency dubai, best google ads agency uae, google ads consultant dubai, search engine marketing dubai, google ads expert dubai, performance max agency dubai, google shopping ads dubai, google ads agency near me dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/google-ads-agency-dubai",
  },

  openGraph: {
    title: "Google Ads Agency in Dubai | Certified PPC Experts for Real Growth",
    description:
      "Partner with a results-driven Google Ads agency in Dubai. Search, Shopping, Display & Performance Max campaigns built to lower CPA and grow ROI. Get a free audit.",
    url: "https://www.zentrixinfotech.com/dubai/google-ads-agency-dubai",
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
    title: "Google Ads Agency in Dubai | Certified PPC Experts for Real Growth",
    description:
      "Partner with a results-driven Google Ads agency in Dubai. Search, Shopping, Display & Performance Max campaigns built to lower CPA and grow ROI. Get a free audit.",
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