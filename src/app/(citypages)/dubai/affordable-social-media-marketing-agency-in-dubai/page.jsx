import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Affordable Social Media Marketing Agency in Dubai | Real Results",
  description:
    "Looking for an affordable social media marketing agency in Dubai? Get expert Instagram, TikTok & Meta Ads management that fits your budget and drives real leads.",
  keywords:
    "affordable social media marketing agency in Dubai, cheap social media marketing Dubai, budget social media agency Dubai, low cost digital marketing Dubai, affordable digital marketing company Dubai, social media marketing services Dubai, best affordable marketing agency UAE, small business social media agency Dubai, affordable SEO and social media Dubai, social media management Dubai pricing",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/affordable-social-media-marketing-agency-in-dubai",
  },

  openGraph: {
    title: "Affordable Social Media Marketing Agency in Dubai | Real Results",
    description:
      "Looking for an affordable social media marketing agency in Dubai? Get expert Instagram, TikTok & Meta Ads management that fits your budget and drives real leads.",
    url: "https://www.zentrixinfotech.com/dubai/affordable-social-media-marketing-agency-in-dubai",
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
    title: "Affordable Social Media Marketing Agency in Dubai | Real Results",
    description:
      "Looking for an affordable social media marketing agency in Dubai? Get expert Instagram, TikTok & Meta Ads management that fits your budget and drives real leads.",
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