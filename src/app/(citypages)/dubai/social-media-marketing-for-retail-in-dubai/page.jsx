import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing for Retail in Dubai | Drive Footfall & Sales",
  description:
    "Grow your retail store with expert social media marketing in Dubai — product content, targeted ads, and campaigns that drive footfall and online sales.",
  keywords:
    "social media marketing for retail in Dubai, retail marketing agency Dubai, retail social media Dubai, e-commerce marketing agency UAE, retail store marketing Dubai, retail digital marketing agency UAE, retail ads agency Dubai, fashion retail marketing Dubai, retail influencer marketing Dubai, retail promotion agency UAE",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/social-media-marketing-for-retail-in-dubai",
  },

  openGraph: {
    title: "Social Media Marketing for Retail in Dubai | Drive Footfall & Sales",
    description:
      "Grow your retail store with expert social media marketing in Dubai — product content, targeted ads, and campaigns that drive footfall and online sales.",
    url: "https://www.zentrixinfotech.com/dubai/social-media-marketing-for-retail-in-dubai",
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
    title: "Social Media Marketing for Retail in Dubai | Drive Footfall & Sales",
    description:
      "Grow your retail store with expert social media marketing in Dubai — product content, targeted ads, and campaigns that drive footfall and online sales.",
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