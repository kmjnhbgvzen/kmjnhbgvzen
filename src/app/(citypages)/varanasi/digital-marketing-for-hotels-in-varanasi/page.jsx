import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Hotels in Varanasi | Boost Direct Bookings",
  description:
    "Grow your Varanasi hotel with expert digital marketing — SEO, Google My Business, social media & ads that bring more direct bookings and guests.",
  keywords:
    "digital marketing for hotels in varanasi, hotel digital marketing agency varanasi, hotel SEO varanasi, hotel social media marketing varanasi, hotel website design varanasi, google my business for hotels, hotel PPC advertising varanasi, OTA management varanasi, increase hotel bookings varanasi, best digital marketing company for hotels, local SEO for hotels, hotel branding varanasi, tourism marketing varanasi, hotel online reputation management",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-hotels-in-varanasi",
  },
  openGraph: {
    title: "Digital Marketing for Hotels in Varanasi | Boost Direct Bookings",
    description:
      "Grow your Varanasi hotel with expert digital marketing — SEO, Google My Business, social media & ads that bring more direct bookings and guests.",
    url: "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-hotels-in-varanasi",
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
    title: "Digital Marketing for Hotels in Varanasi | Boost Direct Bookings",
    description:
      "Grow your Varanasi hotel with expert digital marketing — SEO, Google My Business, social media & ads that bring more direct bookings and guests.",
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