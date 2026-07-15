import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Video Marketing Services in Ghaziabad | Zentrix Infotech",
  description:
    "Professional video marketing services in Ghaziabad including promotional videos, social media reels, and YouTube campaigns to boost brand visibility. Get a free quote.",
  keywords:
    "video marketing services in Ghaziabad, video marketing company Ghaziabad, promotional video production Ghaziabad, social media video marketing Ghaziabad, YouTube video marketing Ghaziabad, corporate video services Ghaziabad, best video marketing company Ghaziabad, video ads agency Ghaziabad, video marketing services near me, product video services Ghaziabad, reels and shorts marketing Ghaziabad, brand video production Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/video-marketing-services-ghaziabad",
  },
  openGraph: {
    title: "Video Marketing Services in Ghaziabad | Zentrix Infotech",
    description:
      "Professional video marketing services in Ghaziabad including promotional videos, social media reels, and YouTube campaigns to boost brand visibility. Get a free quote.",
    url: "https://www.zentrixinfotech.com/ghaziabad/video-marketing-services-ghaziabad",
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
    title: "Video Marketing Services in Ghaziabad | Zentrix Infotech",
    description:
      "Professional video marketing services in Ghaziabad including promotional videos, social media reels, and YouTube campaigns to boost brand visibility. Get a free quote.",
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