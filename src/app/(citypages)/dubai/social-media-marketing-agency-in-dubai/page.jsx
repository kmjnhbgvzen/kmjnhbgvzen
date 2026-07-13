import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing Agency in Dubai | Zentrix Infotech",
  description:
    "Zentrix Infotech is a results-driven social media marketing agency in Dubai helping brands grow on Instagram, TikTok & LinkedIn with content that converts.",
  keywords:
    "social media marketing agency in Dubai, social media marketing company dubai, social media management dubai, smm agency dubai, instagram marketing dubai, social media marketing services uae, best social media agency dubai, social media marketing packages dubai, digital marketing agency dubai, influencer marketing dubai, tiktok marketing dubai, content marketing agency dubai, paid social advertising dubai, affordable social media marketing dubai, social media marketing for small business dubai, linkedin marketing agency dubai",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/dubai/social-media-marketing-agency-in-dubai",
  },

  openGraph: {
    title: "Social Media Marketing Agency in Dubai | Zentrix Infotech",
    description:
      "Zentrix Infotech is a results-driven social media marketing agency in Dubai helping brands grow on Instagram, TikTok & LinkedIn with content that converts.",
    url: "https://www.zentrixinfotech.com/dubai/social-media-marketing-agency-in-dubai",
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
    title: "Social Media Marketing Agency in Dubai | Zentrix Infotech",
    description:
      "Zentrix Infotech is a results-driven social media marketing agency in Dubai helping brands grow on Instagram, TikTok & LinkedIn with content that converts.",
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