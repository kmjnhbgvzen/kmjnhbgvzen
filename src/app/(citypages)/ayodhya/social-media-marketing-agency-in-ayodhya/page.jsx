import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing Agency in Ayodhya | Grow Followers, Bookings & Sales",
  description:
    "Partner with a trusted social media marketing agency in Ayodhya to grow your Instagram, Facebook, and YouTube presence, attract tourists, and drive more bookings and sales.",
  keywords:
    "social media marketing agency in Ayodhya, social media marketing company Ayodhya, Instagram marketing Ayodhya, Facebook ads Ayodhya, social media management Ayodhya, digital marketing agency Ayodhya, content marketing Ayodhya, influencer marketing Ayodhya, social media services near me, hotel social media marketing",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ayodhya/social-media-marketing-agency-in-ayodhya",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Ayodhya | Grow Followers, Bookings & Sales",
    description:
      "Partner with a trusted social media marketing agency in Ayodhya to grow your Instagram, Facebook, and YouTube presence, attract tourists, and drive more bookings and sales.",
    url: "https://www.zentrixinfotech.com/ayodhya/social-media-marketing-agency-in-ayodhya",
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
    title: "Social Media Marketing Agency in Ayodhya | Grow Followers, Bookings & Sales",
    description:
      "Partner with a trusted social media marketing agency in Ayodhya to grow your Instagram, Facebook, and YouTube presence, attract tourists, and drive more bookings and sales.",
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