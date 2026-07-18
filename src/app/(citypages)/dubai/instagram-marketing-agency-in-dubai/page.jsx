import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Instagram Marketing Agency in Dubai | Grow Followers & Sales",
  description:
    "Hire a top Instagram marketing agency in Dubai for reels, ads & influencer strategy that boosts followers, engagement, and real business leads.",
  keywords:
    "Instagram marketing agency in Dubai, Instagram marketing Dubai, Instagram ads agency UAE, Instagram growth agency Dubai, Instagram management Dubai, best Instagram marketing company UAE, Instagram reels agency Dubai, Instagram influencer marketing Dubai, social media marketing Dubai, Instagram promotion services Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/instagram-marketing-agency-dubai",
  },

  openGraph: {
    title: "Best Instagram Marketing Agency in Dubai | Grow Followers & Sales",
    description:
      "Hire a top Instagram marketing agency in Dubai for reels, ads & influencer strategy that boosts followers, engagement, and real business leads.",
    url: "https://www.zentrixinfotech.com/dubai/instagram-marketing-agency-dubai",
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
    title: "Best Instagram Marketing Agency in Dubai | Grow Followers & Sales",
    description:
      "Hire a top Instagram marketing agency in Dubai for reels, ads & influencer strategy that boosts followers, engagement, and real business leads.",
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