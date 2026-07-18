import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing for Real Estate in Dubai | Generate Property Leads",
  description:
    "Grow your real estate business with expert social media marketing in Dubai — targeted ads, property reels, and lead generation that convert buyers.",
  keywords:
    "social media marketing for real estate in Dubai, real estate marketing agency Dubai, property marketing agency UAE, real estate social media Dubai, real estate lead generation Dubai, property Instagram marketing Dubai, real estate digital marketing UAE, real estate ads agency Dubai, property listing marketing Dubai, real estate influencer marketing Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/social-media-marketing-for-real-estate-in-dubai",
  },

  openGraph: {
    title: "Social Media Marketing for Real Estate in Dubai | Generate Property Leads",
    description:
      "Grow your real estate business with expert social media marketing in Dubai — targeted ads, property reels, and lead generation that convert buyers.",
    url: "https://www.zentrixinfotech.com/dubai/social-media-marketing-for-real-estate-in-dubai",
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
    title: "Social Media Marketing for Real Estate in Dubai | Generate Property Leads",
    description:
      "Grow your real estate business with expert social media marketing in Dubai — targeted ads, property reels, and lead generation that convert buyers.",
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