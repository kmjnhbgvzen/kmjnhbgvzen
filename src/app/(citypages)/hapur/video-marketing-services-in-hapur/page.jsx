import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Video Marketing Services in Hapur | Reels, Ads & Brand Videos",
  description:
    "Looking for video marketing services in Hapur? Zentrix Infotech creates reels, promotional videos & ad campaigns that boost engagement and sales.",
  keywords:
    "video marketing services in Hapur, video marketing company Hapur, video production agency Hapur, reels marketing services, promotional video agency near me, YouTube marketing company Hapur, video ads agency, social media video marketing services, corporate video production company, product video marketing services, video content agency UP, brand video production Hapur, video editing services for business, digital marketing agency Hapur, video advertising agency Delhi NCR",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/video-marketing-services-hapur",
  },
  openGraph: {
    title:
      "Video Marketing Services in Hapur | Reels, Ads & Brand Videos",
    description:
      "Looking for video marketing services in Hapur? Zentrix Infotech creates reels, promotional videos & ad campaigns that boost engagement and sales.",
    url: "https://www.zentrixinfotech.com/hapur/video-marketing-services-hapur",
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
    title:
      "Video Marketing Services in Hapur | Reels, Ads & Brand Videos",
    description:
      "Looking for video marketing services in Hapur? Zentrix Infotech creates reels, promotional videos & ad campaigns that boost engagement and sales.",
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