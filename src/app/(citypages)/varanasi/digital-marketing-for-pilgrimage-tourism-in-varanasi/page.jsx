import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Pilgrimage Tourism in Varanasi | More Bookings",
  description:
    "Grow your Varanasi pilgrimage tour business with expert digital marketing — SEO, Google Maps, social media & ads that bring more group and pilgrim tour bookings.",
  keywords:
    "digital marketing for pilgrimage tourism in varanasi, pilgrimage tour operator marketing, kashi vishwanath corridor tour marketing, pilgrimage package SEO varanasi, senior citizen pilgrim tour marketing, group pilgrimage tour ads varanasi, pilgrimage travel agency digital marketing, best digital marketing company for pilgrimage tourism, local SEO for pilgrimage tour operators, pilgrimage tourism social media marketing, multi-day pilgrimage circuit marketing, char dham connecting tour varanasi, pilgrimage tour lead generation, pilgrimage travel reputation management",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-pilgrimage-tourism-in-varanasi",
  },
  openGraph: {
    title: "Digital Marketing for Pilgrimage Tourism in Varanasi | More Bookings",
    description:
      "Grow your Varanasi pilgrimage tour business with expert digital marketing — SEO, Google Maps, social media & ads that bring more group and pilgrim tour bookings.",
    url: "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-pilgrimage-tourism-in-varanasi",
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
    title: "Digital Marketing for Pilgrimage Tourism in Varanasi | More Bookings",
    description:
      "Grow your Varanasi pilgrimage tour business with expert digital marketing — SEO, Google Maps, social media & ads that bring more group and pilgrim tour bookings.",
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