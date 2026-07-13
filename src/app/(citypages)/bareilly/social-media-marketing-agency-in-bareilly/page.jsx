import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing Agency in Bareilly | Instagram & FB Ads",
  description:
    "Looking for a social media marketing agency in Bareilly? Get expert Instagram, Facebook, and YouTube marketing, content creation, and paid ads to grow your brand online.",
  keywords:
    "social media marketing agency in Bareilly, social media marketing company Bareilly, Instagram marketing Bareilly, Facebook ads agency Bareilly, social media management Bareilly, content marketing agency Bareilly, best social media agency UP, influencer marketing Bareilly, social media agency for small business, affordable social media marketing Bareilly",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/bareilly/social-media-marketing-agency-in-bareilly",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Bareilly | Instagram & FB Ads",
    description:
      "Looking for a social media marketing agency in Bareilly? Get expert Instagram, Facebook, and YouTube marketing, content creation, and paid ads to grow your brand online.",
    url: "https://www.zentrixinfotech.com/bareilly/social-media-marketing-agency-in-bareilly",
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
    title: "Social Media Marketing Agency in Bareilly | Instagram & FB Ads",
    description:
      "Looking for a social media marketing agency in Bareilly? Get expert Instagram, Facebook, and YouTube marketing, content creation, and paid ads to grow your brand online.",
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