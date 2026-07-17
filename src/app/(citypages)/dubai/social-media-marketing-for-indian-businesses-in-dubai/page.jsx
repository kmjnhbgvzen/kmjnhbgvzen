import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing for Indian Businesses in Dubai | Reach NRI Customers",
  description:
    "Grow your Indian business in Dubai with targeted social media marketing that connects with NRI customers, local Indians, and the wider UAE community.",
  keywords:
    "social media marketing for Indian businesses in Dubai, Indian business marketing Dubai, NRI marketing agency Dubai, Indian restaurant marketing Dubai, Indian community marketing UAE, social media agency for Indian brands Dubai, marketing for Indian shops Dubai, Indian diaspora marketing Dubai, Hindi Punjabi marketing Dubai, Indian business promotion UAE",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/social-media-marketing-indian-businesses-dubai",
  },

  openGraph: {
    title: "Social Media Marketing for Indian Businesses in Dubai | Reach NRI Customers",
    description:
      "Grow your Indian business in Dubai with targeted social media marketing that connects with NRI customers, local Indians, and the wider UAE community.",
    url: "https://www.zentrixinfotech.com/dubai/social-media-marketing-indian-businesses-dubai",
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
    title: "Social Media Marketing for Indian Businesses in Dubai | Reach NRI Customers",
    description:
      "Grow your Indian business in Dubai with targeted social media marketing that connects with NRI customers, local Indians, and the wider UAE community.",
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