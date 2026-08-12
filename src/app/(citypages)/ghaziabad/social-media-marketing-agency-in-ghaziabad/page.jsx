import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Social Media Marketing Agency in Ghaziabad | Grow Your Brand Online",
  description:
    "Looking for the best social media marketing agency in Ghaziabad? Get result-driven Facebook, Instagram & LinkedIn marketing, content creation & ad management. Book a free consultation today.",
  keywords:
    "social media marketing agency in Ghaziabad, social media marketing company in Ghaziabad, best social media marketing agency Ghaziabad, digital marketing agency in Ghaziabad, social media marketing services Ghaziabad, Instagram marketing agency Ghaziabad, Facebook ads agency Ghaziabad, SMM agency near me, social media management company Ghaziabad, local social media marketing experts, affordable social media marketing Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/social-media-marketing-agency-in-ghaziabad",
  },
  openGraph: {
    title:
      "Social Media Marketing Agency in Ghaziabad | Grow Your Brand Online",
    description:
      "Looking for the best social media marketing agency in Ghaziabad? Get result-driven Facebook, Instagram & LinkedIn marketing, content creation & ad management. Book a free consultation today.",
    url: "https://www.zentrixinfotech.com/ghaziabad/social-media-marketing-agency-in-ghaziabad",
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
      "Social Media Marketing Agency in Ghaziabad | Grow Your Brand Online",
    description:
      "Looking for the best social media marketing agency in Ghaziabad? Get result-driven Facebook, Instagram & LinkedIn marketing, content creation & ad management. Book a free consultation today.",
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