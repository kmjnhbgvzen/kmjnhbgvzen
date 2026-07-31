import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing Services Price in Ayodhya, UP",
  description:
    "Compare social media marketing service prices in Ayodhya, Uttar Pradesh, understand package tiers, what affects cost, and how to get a fair quote.",
  keywords:
    "social media marketing services in ayodhya uttar pradesh price, social media marketing cost ayodhya, instagram marketing price ayodhya, social media package price up, facebook marketing cost ayodhya, social media marketing charges",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/social-media-marketing-services-in-ayodhya-uttar-pradesh-price",
  },
  openGraph: {
    title: "Social Media Marketing Services Price in Ayodhya, UP",
    description:
      "Compare social media marketing service prices in Ayodhya, Uttar Pradesh, understand package tiers, what affects cost, and how to get a fair quote.",
    url: "https://www.zentrixinfotech.com/ayodhya/social-media-marketing-services-in-ayodhya-uttar-pradesh-price",
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
    title: "Social Media Marketing Services Price in Ayodhya, UP",
    description:
      "Compare social media marketing service prices in Ayodhya, Uttar Pradesh, understand package tiers, what affects cost, and how to get a fair quote.",
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