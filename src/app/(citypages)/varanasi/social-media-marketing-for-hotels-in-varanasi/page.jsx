import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing for Hotels in Varanasi | Boost Stays",
  description:
    "Social media marketing for hotels in Varanasi — Instagram, Facebook & Reels strategies that build trust and drive direct bookings. Free profile audit.",
  keywords:
    "social media marketing for hotels in Varanasi, hotel social media agency Varanasi, Instagram marketing for hotels Varanasi, hotel Reels marketing Varanasi, hospitality social media company UP, hotel Facebook ads Varanasi, hotel branding social media Varanasi, travel content marketing Varanasi, hotel Instagram growth Varanasi",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/varanasi/social-media-marketing-for-hotels-in-varanasi",
  },
  openGraph: {
    title: "Social Media Marketing for Hotels in Varanasi | Boost Stays",
    description:
      "Social media marketing for hotels in Varanasi — Instagram, Facebook & Reels strategies that build trust and drive direct bookings. Free profile audit.",
    url: "https://www.zentrixinfotech.com/varanasi/social-media-marketing-for-hotels-in-varanasi",
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
    title: "Social Media Marketing for Hotels in Varanasi | Boost Stays",
    description:
      "Social media marketing for hotels in Varanasi — Instagram, Facebook & Reels strategies that build trust and drive direct bookings. Free profile audit.",
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