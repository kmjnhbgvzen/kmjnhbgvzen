import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing Agency in Hapur | Grow Your Brand Online",
  description:
    "Looking for a trusted social media marketing agency in Hapur? Get expert content creation, paid ads, and brand growth strategies to boost engagement and sales.",
  keywords:
    "social media marketing agency in Hapur, social media marketing Hapur, Instagram marketing Hapur, Facebook ads Hapur, social media management company Hapur, best social media agency Hapur, social media services Hapur",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/hapur/social-media-marketing-agency-in-hapur",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Hapur | Grow Your Brand Online",
    description:
      "Looking for a trusted social media marketing agency in Hapur? Get expert content creation, paid ads, and brand growth strategies to boost engagement and sales.",
    url: "https://www.zentrixinfotech.com/cities/hapur/social-media-marketing-agency-in-hapur",
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
    title: "Social Media Marketing Agency in Hapur | Grow Your Brand Online",
    description:
      "Looking for a trusted social media marketing agency in Hapur? Get expert content creation, paid ads, and brand growth strategies to boost engagement and sales.",
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