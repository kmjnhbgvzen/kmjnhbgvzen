import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing for Hotels in Dubai | Boost Direct Bookings",
  description:
    "Grow your hotel with expert social media marketing in Dubai — stunning visuals, targeted ads, and influencer stays that drive direct bookings.",
  keywords:
    "social media marketing for hotels in Dubai, hotel marketing agency Dubai, hospitality marketing agency UAE, hotel social media Dubai, resort marketing agency Dubai, hotel Instagram marketing Dubai, hotel digital marketing UAE, hotel ads agency Dubai, hotel influencer marketing Dubai, hospitality social media agency Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/social-media-marketing-for-hotels-in-dubai",
  },

  openGraph: {
    title: "Social Media Marketing for Hotels in Dubai | Boost Direct Bookings",
    description:
      "Grow your hotel with expert social media marketing in Dubai — stunning visuals, targeted ads, and influencer stays that drive direct bookings.",
    url: "https://www.zentrixinfotech.com/dubai/social-media-marketing-for-hotels-in-dubai",
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
    title: "Social Media Marketing for Hotels in Dubai | Boost Direct Bookings",
    description:
      "Grow your hotel with expert social media marketing in Dubai — stunning visuals, targeted ads, and influencer stays that drive direct bookings.",
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