import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Facebook Ads Agency in Dubai | High-ROI Ad Campaigns",
  description:
    "Partner with a top Facebook Ads agency in Dubai for targeted campaigns that lower cost per lead and drive real sales, sign-ups, and store visits.",
  keywords:
    "Facebook ads agency in Dubai, Facebook advertising Dubai, Facebook ads company UAE, Meta ads agency Dubai, Facebook marketing agency Dubai, Facebook ads management UAE, paid social media agency Dubai, Facebook ads expert Dubai, Instagram and Facebook ads Dubai, best Facebook ads agency UAE",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/facebook-ads-agency-dubai",
  },

  openGraph: {
    title: "Best Facebook Ads Agency in Dubai | High-ROI Ad Campaigns",
    description:
      "Partner with a top Facebook Ads agency in Dubai for targeted campaigns that lower cost per lead and drive real sales, sign-ups, and store visits.",
    url: "https://www.zentrixinfotech.com/dubai/facebook-ads-agency-dubai",
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
    title: "Best Facebook Ads Agency in Dubai | High-ROI Ad Campaigns",
    description:
      "Partner with a top Facebook Ads agency in Dubai for targeted campaigns that lower cost per lead and drive real sales, sign-ups, and store visits.",
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