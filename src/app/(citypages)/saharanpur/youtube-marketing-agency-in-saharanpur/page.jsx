import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "YouTube Marketing Agency in Saharanpur | Zentrix Infotech",
  description:
    "Grow your channel with YouTube marketing in Saharanpur. Video SEO, channel strategy, YouTube ads, and content optimization from Zentrix Infotech.",
  keywords:
    "youtube marketing agency in Saharanpur, youtube marketing services Saharanpur, youtube seo services, youtube ads agency Saharanpur, video marketing agency Uttar Pradesh, youtube channel management, youtube content strategy, youtube video optimization",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/youtube-marketing-agency-in-saharanpur",
  },
  openGraph: {
    title: "YouTube Marketing Agency in Saharanpur | Zentrix Infotech",
    description:
      "Grow your channel with YouTube marketing in Saharanpur. Video SEO, channel strategy, YouTube ads, and content optimization from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/saharanpur/youtube-marketing-agency-in-saharanpur",
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
    title: "YouTube Marketing Agency in Saharanpur | Zentrix Infotech",
    description:
      "Grow your channel with YouTube marketing in Saharanpur. Video SEO, channel strategy, YouTube ads, and content optimization from Zentrix Infotech.",
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