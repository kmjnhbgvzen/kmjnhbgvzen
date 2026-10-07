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
    "Grow your Moradabad business with result-driven social media marketing from Zentrix Infotech. Get more leads, followers and sales with strategy, content and ads.",
  keywords:
    "social media marketing Moradabad, social media marketing company in Moradabad, social media marketing agency Moradabad, social media marketing services Moradabad, best social media marketing company in Moradabad, social media management Moradabad, social media advertising Moradabad, Instagram marketing Moradabad, Facebook marketing Moradabad, social media marketing packages Moradabad, social media marketing cost in Moradabad, social media promotion Moradabad, digital marketing company in Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/social-media-marketing-moradabad",
  },

  openGraph: {
    title: "Social Media Marketing in Moradabad | Zentrix Infotech",
    description:
      "Grow your Moradabad business with result-driven social media marketing from Zentrix Infotech. Get more leads, followers and sales with strategy, content and ads.",
    url: "https://www.zentrixinfotech.com/moradabad/social-media-marketing-moradabad",
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
      "Grow your Moradabad business with result-driven social media marketing from Zentrix Infotech. Get more leads, followers and sales with strategy, content and ads.",
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
