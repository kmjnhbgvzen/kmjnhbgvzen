import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Video Marketing Services in Bareilly | Zentrix Infotech",
  description:
    "Grow your brand with professional video marketing services in Bareilly by Zentrix Infotech. Reels, ads & brand videos that boost engagement and sales.",
  keywords:
    "video marketing services in Bareilly, video marketing company Bareilly, video production agency Bareilly, promotional video services Bareilly, reels marketing agency Bareilly, corporate video services Bareilly, best video marketing agency near me, video ads agency Bareilly, brand video production Bareilly, affordable video marketing services, social media video services Bareilly, explainer video company Bareilly",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/bareilly/video-marketing-services-bareilly",
  },

  openGraph: {
    title: "Video Marketing Services in Bareilly | Zentrix Infotech",
    description:
      "Grow your brand with professional video marketing services in Bareilly by Zentrix Infotech. Reels, ads & brand videos that boost engagement and sales.",
    url: "https://www.zentrixinfotech.com/bareilly/video-marketing-services-bareilly",
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
    title: "Video Marketing Services in Bareilly | Zentrix Infotech",
    description:
      "Grow your brand with professional video marketing services in Bareilly by Zentrix Infotech. Reels, ads & brand videos that boost engagement and sales.",
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