import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Facebook Ads Management Services USA | Expert Social Media Advertising",
  description:
    "Grow your business with expert Facebook Ads management services in the USA. Get targeted campaigns, creative ad strategies, and ongoing optimization built to maximize leads and sales.",
  keywords:
    "facebook ads management services usa, facebook ads agency usa, facebook advertising services usa, meta ads management usa, facebook ads experts usa, best facebook ads agency usa, facebook ads consultant usa, social media advertising agency usa, facebook ads optimization services, instagram ads management usa",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/saharanpur/facebook-ads-management-services-usa",
  },
  openGraph: {
    title: "Facebook Ads Management Services USA | Expert Social Media Advertising",
    description:
      "Grow your business with expert Facebook Ads management services in the USA. Get targeted campaigns, creative ad strategies, and ongoing optimization built to maximize leads and sales.",
    url: "https://www.zentrixinfotech.com/saharanpur/facebook-ads-management-services-usa",
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
    title: "Facebook Ads Management Services USA | Expert Social Media Advertising",
    description:
      "Grow your business with expert Facebook Ads management services in the USA. Get targeted campaigns, creative ad strategies, and ongoing optimization built to maximize leads and sales.",
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