import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Video Marketing Services in Dubai | Engage & Convert",
  description:
    "Boost your brand with professional video marketing services in Dubai. Reels, ads, corporate videos & YouTube content designed to drive engagement and sales.",
  keywords:
    "video marketing services in Dubai, video marketing agency Dubai, corporate video production Dubai, promotional video services UAE, video content marketing Dubai, video production company Dubai, social media video marketing Dubai, video ads agency Dubai, best video marketing company UAE, explainer video services Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/video-marketing-services-in-dubai",
  },

  openGraph: {
    title: "Video Marketing Services in Dubai | Engage & Convert",
    description:
      "Boost your brand with professional video marketing services in Dubai. Reels, ads, corporate videos & YouTube content designed to drive engagement and sales.",
    url: "https://www.zentrixinfotech.com/dubai/video-marketing-services-in-dubai",
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
    title: "Video Marketing Services in Dubai | Engage & Convert",
    description:
      "Boost your brand with professional video marketing services in Dubai. Reels, ads, corporate videos & YouTube content designed to drive engagement and sales.",
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