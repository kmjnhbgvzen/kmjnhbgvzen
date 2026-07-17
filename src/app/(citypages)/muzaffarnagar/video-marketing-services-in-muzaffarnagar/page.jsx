import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Video Marketing Services in Muzaffarnagar | Zentrix Infotech",
  description:
    "Grow your brand with expert video marketing services in Muzaffarnagar by Zentrix Infotech. Explainer videos, ads, social media reels & YouTube marketing that convert. Get a free quote today.",
  keywords:
    "video marketing services in Muzaffarnagar, video marketing company Muzaffarnagar, best video marketing agency Muzaffarnagar, video production services Muzaffarnagar, social media video marketing Muzaffarnagar, YouTube marketing services Muzaffarnagar, corporate video services Muzaffarnagar, explainer video company Muzaffarnagar, promotional video services Muzaffarnagar, digital marketing agency Muzaffarnagar, video ads Muzaffarnagar, affordable video marketing Muzaffarnagar",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/video-marketing-services-in-muzaffarnagar",
  },
  openGraph: {
    title: "Video Marketing Services in Muzaffarnagar | Zentrix Infotech",
    description:
      "Grow your brand with expert video marketing services in Muzaffarnagar by Zentrix Infotech. Explainer videos, ads, social media reels & YouTube marketing that convert. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/video-marketing-services-in-muzaffarnagar",
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
    title: "Video Marketing Services in Muzaffarnagar | Zentrix Infotech",
    description:
      "Grow your brand with expert video marketing services in Muzaffarnagar by Zentrix Infotech. Explainer videos, ads, social media reels & YouTube marketing that convert. Get a free quote today.",
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