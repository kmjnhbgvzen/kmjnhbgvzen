import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Facebook Ads Management in Dubai | Expert Meta Ads Agency",
  description:
    "Get result-driven Facebook Ads management in Dubai. Our experts create, target & optimize Meta campaigns to boost leads, sales & ROI. Book a free ad audit today.",
  keywords:
    "Facebook Ads agency Dubai, Meta Ads management Dubai, Facebook advertising company Dubai, Instagram Ads agency Dubai, social media ads Dubai, Facebook Ads experts UAE, affordable Facebook Ads agency Dubai, best Facebook Ads company Dubai, paid social media marketing Dubai, Facebook Ads specialist Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/facebook-ads-management-dubai",
  },

  openGraph: {
    title: "Facebook Ads Management in Dubai | Expert Meta Ads Agency",
    description:
      "Get result-driven Facebook Ads management in Dubai. Our experts create, target & optimize Meta campaigns to boost leads, sales & ROI. Book a free ad audit today.",
    url: "https://www.zentrixinfotech.com/dubai/facebook-ads-management-dubai",
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
    title: "Facebook Ads Management in Dubai | Expert Meta Ads Agency",
    description:
      "Get result-driven Facebook Ads management in Dubai. Our experts create, target & optimize Meta campaigns to boost leads, sales & ROI. Book a free ad audit today.",
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