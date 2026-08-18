import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Instagram Marketing Agency in Ghaziabad | Zentrix Infotech",

  description:
    "Looking for the best Instagram marketing agency in Ghaziabad? Zentrix Infotech delivers ROI-driven Instagram growth, Reels marketing, influencer campaigns, and paid ads to scale your brand across Delhi NCR.",

  keywords: [
    "Instagram marketing agency in Ghaziabad",
    "Instagram marketing Ghaziabad",
    "Instagram ads agency Ghaziabad",
    "Instagram Reels marketing Ghaziabad",
    "Instagram growth agency Ghaziabad",
    "Instagram management agency Ghaziabad",
    "best Instagram marketing agency Ghaziabad",
    "Instagram marketing services Ghaziabad",
    "Instagram marketing company Ghaziabad",
    "Instagram advertising agency Ghaziabad",
    "Instagram content creation Ghaziabad",
    "Instagram strategy Ghaziabad",
    "Instagram influencer marketing Ghaziabad",
    "Instagram for business Ghaziabad",
    "Instagram SEO Ghaziabad",
    "Instagram analytics Ghaziabad",
    "Delhi NCR Instagram marketing",
    "Ghaziabad social media agency",
    "Instagram marketing for e-commerce Ghaziabad",
    "Instagram marketing for real estate Ghaziabad",
  ],

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/instagram-marketing-agency-in-ghaziabad",
  },

  openGraph: {
    title: "Instagram Marketing Agency in Ghaziabad | Zentrix Infotech",

    description:
      "Looking for the best Instagram marketing agency in Ghaziabad? Zentrix Infotech delivers ROI-driven Instagram growth, Reels marketing, influencer campaigns, and paid ads to scale your brand across Delhi NCR.",

    url: "https://www.zentrixinfotech.com/ghaziabad/instagram-marketing-agency-in-ghaziabad",

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

    title: "Instagram Marketing Agency in Ghaziabad | Zentrix Infotech",

    description:
      "Looking for the best Instagram marketing agency in Ghaziabad? Zentrix Infotech delivers ROI-driven Instagram growth, Reels marketing, influencer campaigns, and paid ads to scale your brand across Delhi NCR.",

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