import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing for Restaurants in Dubai | Fill Tables & Boost Orders",
  description:
    "Grow your restaurant with expert social media marketing in Dubai — mouth-watering content, targeted ads, and influencer campaigns that drive bookings.",
  keywords:
    "social media marketing for restaurants in Dubai, restaurant marketing agency Dubai, restaurant social media Dubai, food marketing agency UAE, restaurant Instagram marketing Dubai, restaurant promotion agency Dubai, food influencer marketing Dubai, restaurant digital marketing UAE, cafe marketing agency Dubai, restaurant ads agency Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/social-media-marketing-for-restaurants-in-dubai",
  },

  openGraph: {
    title: "Social Media Marketing for Restaurants in Dubai | Fill Tables & Boost Orders",
    description:
      "Grow your restaurant with expert social media marketing in Dubai — mouth-watering content, targeted ads, and influencer campaigns that drive bookings.",
    url: "https://www.zentrixinfotech.com/dubai/social-media-marketing-for-restaurants-in-dubai",
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
    title: "Social Media Marketing for Restaurants in Dubai | Fill Tables & Boost Orders",
    description:
      "Grow your restaurant with expert social media marketing in Dubai — mouth-watering content, targeted ads, and influencer campaigns that drive bookings.",
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