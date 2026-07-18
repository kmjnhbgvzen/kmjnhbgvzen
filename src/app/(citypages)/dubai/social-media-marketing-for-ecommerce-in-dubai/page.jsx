import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing for Ecommerce in Dubai | Boost Online Sales",
  description:
    "Grow your online store with expert social media marketing for ecommerce in Dubai. Proven Instagram, TikTok & Meta Ads strategies to drive traffic, leads and sales.",
  keywords:
    "social media marketing for ecommerce in Dubai, ecommerce marketing Dubai, social media marketing Dubai, Instagram marketing for ecommerce, ecommerce digital marketing UAE, social media agency for ecommerce Dubai, ecommerce lead generation Dubai, TikTok marketing for online stores, best social media marketing company Dubai, ecommerce branding Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/social-media-marketing-for-ecommerce-in-dubai",
  },

  openGraph: {
    title: "Social Media Marketing for Ecommerce in Dubai | Boost Online Sales",
    description:
      "Grow your online store with expert social media marketing for ecommerce in Dubai. Proven Instagram, TikTok & Meta Ads strategies to drive traffic, leads and sales.",
    url: "https://www.zentrixinfotech.com/dubai/social-media-marketing-for-ecommerce-in-dubai",
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
    title: "Social Media Marketing for Ecommerce in Dubai | Boost Online Sales",
    description:
      "Grow your online store with expert social media marketing for ecommerce in Dubai. Proven Instagram, TikTok & Meta Ads strategies to drive traffic, leads and sales.",
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