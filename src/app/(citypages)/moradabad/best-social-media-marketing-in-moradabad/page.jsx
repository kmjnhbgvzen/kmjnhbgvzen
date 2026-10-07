import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Social Media Marketing in Moradabad | Zentrix Infotech",
  description:
    "Looking for the best social media marketing in Moradabad? See what great looks like and how Zentrix Infotech delivers leads, bookings and sales.",
  keywords:
    "best social media marketing in Moradabad, best social media marketing company in Moradabad, best social media marketing agency Moradabad, top social media marketing Moradabad, best social media marketing services Moradabad, best social media management Moradabad, best Instagram marketing Moradabad, best Facebook marketing Moradabad, affordable social media marketing Moradabad, result-oriented social media marketing Moradabad, social media marketing experts Moradabad, trusted social media marketing Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-social-media-marketing-in-moradabad",
  },

  openGraph: {
    title: "Best Social Media Marketing in Moradabad | Zentrix Infotech",
    description:
      "Looking for the best social media marketing in Moradabad? See what great looks like and how Zentrix Infotech delivers leads, bookings and sales.",
    url: "https://www.zentrixinfotech.com/moradabad/best-social-media-marketing-in-moradabad",
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
    title: "Best Social Media Marketing in Moradabad | Zentrix Infotech",
    description:
      "Looking for the best social media marketing in Moradabad? See what great looks like and how Zentrix Infotech delivers leads, bookings and sales.",
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
