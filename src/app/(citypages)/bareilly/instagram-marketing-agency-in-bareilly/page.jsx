import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Instagram Marketing Agency in Bareilly | Zentrix Infotech",
  description:
    "Grow your brand with a trusted Instagram marketing agency in Bareilly. Zentrix Infotech creates content, ads & strategies that turn followers into customers.",
  keywords:
    "Instagram marketing agency in Bareilly, Instagram marketing company Bareilly, social media marketing agency Bareilly, Instagram ads services Bareilly, Instagram growth services Bareilly, best Instagram marketing agency near me, Instagram reels marketing Bareilly, social media marketing company Bareilly, Instagram marketing for small business, brand promotion agency Bareilly, affordable social media marketing Bareilly, Instagram page management services",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/bareilly/instagram-marketing-agency-bareilly",
  },

  openGraph: {
    title: "Instagram Marketing Agency in Bareilly | Zentrix Infotech",
    description:
      "Grow your brand with a trusted Instagram marketing agency in Bareilly. Zentrix Infotech creates content, ads & strategies that turn followers into customers.",
    url: "https://www.zentrixinfotech.com/bareilly/instagram-marketing-agency-bareilly",
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
    title: "Instagram Marketing Agency in Bareilly | Zentrix Infotech",
    description:
      "Grow your brand with a trusted Instagram marketing agency in Bareilly. Zentrix Infotech creates content, ads & strategies that turn followers into customers.",
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