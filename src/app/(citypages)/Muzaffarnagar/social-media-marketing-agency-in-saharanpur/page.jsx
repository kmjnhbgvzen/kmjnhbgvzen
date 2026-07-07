import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing Agency in Muzaffarnagar | Grow Your Brand Online",
  description:
    "Hire a social media marketing agency in Muzaffarnagar for strategy, content, ads & management on Instagram, Facebook & more to grow leads and sales.",
  keywords:
    "social media marketing agency in Muzaffarnagar, social media marketing company Muzaffarnagar, Instagram marketing Muzaffarnagar, Facebook ads agency Muzaffarnagar, social media management Muzaffarnagar, digital marketing agency Muzaffarnagar, best SMM agency Muzaffarnagar",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/cities/muzaffarnagar/social-media-marketing-agency-in-muzaffarnagar",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Muzaffarnagar | Grow Your Brand Online",
    description:
      "Hire a social media marketing agency in Muzaffarnagar for strategy, content, ads & management on Instagram, Facebook & more to grow leads and sales.",
    url: "https://www.zentrixinfotech.com/muzaffarnagar/social-media-marketing-agency-in-muzaffarnagar",
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
    title: "Social Media Marketing Agency in Muzaffarnagar | Grow Your Brand Online",
    description:
      "Hire a social media marketing agency in Muzaffarnagar for strategy, content, ads & management on Instagram, Facebook & more to grow leads and sales.",
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