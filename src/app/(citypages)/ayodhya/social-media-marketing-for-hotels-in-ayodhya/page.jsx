import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing for Hotels in Ayodhya - Zentrix Infotech",
  description:
    "Grow your hotel bookings with expert social media marketing for hotels in Ayodhya. Zentrix Infotech offers Instagram, Facebook, and YouTube marketing services. Get a free consultation today.",
  keywords:
    "social media marketing for hotels in Ayodhya, hotel social media agency Ayodhya, Instagram marketing for hotels Ayodhya, hotel Facebook marketing Ayodhya, hospitality social media services Ayodhya, hotel branding social media Ayodhya, Zentrix Infotech Ayodhya, hotel marketing company Uttar Pradesh, social media agency for hospitality Ayodhya, hotel content marketing Ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/social-media-marketing-hotels-ayodhya",
  },
  openGraph: {
    title: "Social Media Marketing for Hotels in Ayodhya - Zentrix Infotech",
    description:
      "Grow your hotel bookings with expert social media marketing for hotels in Ayodhya. Zentrix Infotech offers Instagram, Facebook, and YouTube marketing services. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/ayodhya/social-media-marketing-for-hotels-in-ayodhya",
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
    title: "Social Media Marketing for Hotels in Ayodhya - Zentrix Infotech",
    description:
      "Grow your hotel bookings with expert social media marketing for hotels in Ayodhya. Zentrix Infotech offers Instagram, Facebook, and YouTube marketing services. Get a free consultation today.",
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