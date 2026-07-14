import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Restaurants in Meerut | Grow Footfall & Orders",
  description:
    "Attract more diners with expert digital marketing for restaurants in Meerut — Google Business Profile, SEO, social media, and ad strategies that work.",
  keywords:
    "digital marketing for restaurants in Meerut, restaurant marketing Meerut, Google Business Profile for restaurants, restaurant SEO Meerut, social media marketing for restaurants, food business digital marketing, restaurant Google Ads, cloud kitchen marketing Meerut, restaurant online reputation, restaurant marketing agency Meerut",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/digital-marketing-for-restaurants-in-meerut",
  },
  openGraph: {
    title: "Digital Marketing for Restaurants in Meerut | Grow Footfall & Orders",
    description:
      "Attract more diners with expert digital marketing for restaurants in Meerut — Google Business Profile, SEO, social media, and ad strategies that work.",
    url: "https://www.zentrixinfotech.com/meerut/digital-marketing-for-restaurants-in-meerut",
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
    title: "Digital Marketing for Restaurants in Meerut | Grow Footfall & Orders",
    description:
      "Attract more diners with expert digital marketing for restaurants in Meerut — Google Business Profile, SEO, social media, and ad strategies that work.",
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