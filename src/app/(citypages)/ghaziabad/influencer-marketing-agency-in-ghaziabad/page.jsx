import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Influencer Marketing Agency in Ghaziabad | Zentrix Infotech",

  description:
    "Looking for the best influencer marketing agency in Ghaziabad? Zentrix Infotech delivers ROI-driven influencer campaigns, creator management, and performance marketing to scale your brand across Instagram, YouTube & more.",

  keywords: [
    "influencer marketing agency in Ghaziabad",
    "influencer marketing Ghaziabad",
    "social media influencer agency Ghaziabad",
    "Instagram influencer marketing Ghaziabad",
    "YouTube influencer marketing Ghaziabad",
    "influencer campaign management Ghaziabad",
    "influencer marketing services Ghaziabad",
    "best influencer marketing agency Ghaziabad",
    "influencer marketing company Ghaziabad",
    "performance influencer marketing Ghaziabad",
    "influencer strategy Ghaziabad",
    "micro influencer marketing Ghaziabad",
    "nano influencer campaigns Ghaziabad",
    "creator partnerships Ghaziabad",
    "influencer content creation Ghaziabad",
    "influencer ROI tracking Ghaziabad",
    "Delhi NCR influencer marketing",
    "Ghaziabad digital marketing agency",
    "influencer marketing for e-commerce Ghaziabad",
    "influencer marketing for real estate Ghaziabad",
  ],

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/influencer-marketing-agency-in-ghaziabad",
  },

  openGraph: {
    title: "Influencer Marketing Agency in Ghaziabad | Zentrix Infotech",

    description:
      "Looking for the best influencer marketing agency in Ghaziabad? Zentrix Infotech delivers ROI-driven influencer campaigns, creator management, and performance marketing to scale your brand across Instagram, YouTube & more.",

    url: "https://www.zentrixinfotech.com/ghaziabad/influencer-marketing-agency-in-ghaziabad",

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
    title: "Influencer Marketing Agency in Ghaziabad | Zentrix Infotech",

    description:
      "Looking for the best influencer marketing agency in Ghaziabad? Zentrix Infotech delivers ROI-driven influencer campaigns, creator management, and performance marketing to scale your brand across Instagram, YouTube & more.",

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