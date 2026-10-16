import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing in Moradabad | Zentrix Infotech",
  description:
    "Grow your brand with social media marketing in Moradabad. Zentrix Infotech offers content, paid ads and page management on Instagram, Facebook and LinkedIn.",
  keywords:
    "social media marketing in Moradabad, social media marketing services Moradabad, social media marketing agency Moradabad, social media marketing company Moradabad, Instagram marketing Moradabad, Facebook ads Moradabad, LinkedIn marketing Moradabad, social media management Moradabad, social media advertising Moradabad, social media marketing for small business Moradabad, affordable social media marketing Moradabad, digital marketing company in Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/social-media-marketing-in-moradabad",
  },

  openGraph: {
    title: "Social Media Marketing in Moradabad | Zentrix Infotech",
    description:
      "Grow your brand with social media marketing in Moradabad. Zentrix Infotech offers content, paid ads and page management on Instagram, Facebook and LinkedIn.",
    url: "https://www.zentrixinfotech.com/moradabad/social-media-marketing-in-moradabad",
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
    title: "Social Media Marketing in Moradabad | Zentrix Infotech",
    description:
      "Grow your brand with social media marketing in Moradabad. Zentrix Infotech offers content, paid ads and page management on Instagram, Facebook and LinkedIn.",
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