import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Video Marketing Services in Meerut | Promo, Reels & Brand Video Experts",
  description:
    "Looking for professional video marketing services in Meerut? We create promo videos, reels, product videos & YouTube content that boost brand visibility, engagement & sales. Get a free consultation today.",
  keywords:
    "video marketing services in Meerut, video marketing company Meerut, promotional video services Meerut, product video shoot Meerut, reels making agency Meerut, YouTube video marketing Meerut, corporate video production Meerut, social media video services, brand video agency Uttar Pradesh, video content marketing services, business promo video Meerut",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/video-marketing-services-in-meerut",
  },
  openGraph: {
    title: "Video Marketing Services in Meerut | Promo, Reels & Brand Video Experts",
    description:
      "Looking for professional video marketing services in Meerut? We create promo videos, reels, product videos & YouTube content that boost brand visibility, engagement & sales. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/meerut/video-marketing-services-in-meerut",
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
    title: "Video Marketing Services in Meerut | Promo, Reels & Brand Video Experts",
    description:
      "Looking for professional video marketing services in Meerut? We create promo videos, reels, product videos & YouTube content that boost brand visibility, engagement & sales. Get a free consultation today.",
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