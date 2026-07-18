import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Retargeting Ads Agency in Dubai | Recover Lost Leads & Sales",
  description:
    "Hire a result-driven retargeting ads agency in Dubai to re-engage lost visitors and turn them into customers. Google & Meta retargeting that boosts ROI. Free audit.",
  keywords:
    "retargeting agency Dubai, remarketing agency Dubai, Facebook retargeting Dubai, Google remarketing agency Dubai, retargeting ads company UAE, dynamic retargeting Dubai, abandoned cart retargeting Dubai, retargeting campaigns Dubai, best remarketing agency Dubai, retargeting marketing services Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/retargeting-ads-agency-dubai",
  },

  openGraph: {
    title: "Retargeting Ads Agency in Dubai | Recover Lost Leads & Sales",
    description:
      "Hire a result-driven retargeting ads agency in Dubai to re-engage lost visitors and turn them into customers. Google & Meta retargeting that boosts ROI. Free audit.",
    url: "https://www.zentrixinfotech.com/dubai/retargeting-ads-agency-dubai",
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
    title: "Retargeting Ads Agency in Dubai | Recover Lost Leads & Sales",
    description:
      "Hire a result-driven retargeting ads agency in Dubai to re-engage lost visitors and turn them into customers. Google & Meta retargeting that boosts ROI. Free audit.",
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