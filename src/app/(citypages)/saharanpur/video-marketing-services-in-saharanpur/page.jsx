import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Video Marketing Services in Saharanpur | Reels & Ads",
  description:
    "Grow your brand with expert video marketing services in Saharanpur. Reels, ads, product & brand videos that convert. Free consultation — call now!",
  keywords:
    "video marketing services in Saharanpur, video marketing company in Saharanpur, video production agency Saharanpur, corporate video making Saharanpur, product video shooting Saharanpur, promotional video services Saharanpur, YouTube marketing agency Saharanpur, Reels video production Saharanpur, best video marketing company UP, video ads agency Saharanpur, brand video production Saharanpur, video marketing for furniture business Saharanpur, video marketing for ecommerce Saharanpur, animated explainer video services Saharanpur, corporate video shooting company near me",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/video-marketing-services-saharanpur",
  },
  openGraph: {
    title: "Video Marketing Services in Saharanpur | Reels & Ads",
    description:
      "Grow your brand with expert video marketing services in Saharanpur. Reels, ads, product & brand videos that convert. Free consultation — call now!",
    url: "https://www.zentrixinfotech.com/saharanpur/video-marketing-services-saharanpur",
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
    title: "Video Marketing Services in Saharanpur | Reels & Ads",
    description:
      "Grow your brand with expert video marketing services in Saharanpur. Reels, ads, product & brand videos that convert. Free consultation — call now!",
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