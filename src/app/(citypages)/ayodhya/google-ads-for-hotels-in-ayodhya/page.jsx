import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Google Ads for Hotels in Ayodhya - Zentrix Infotech",
  description:
    "Increase direct bookings with expert Google Ads for hotels in Ayodhya. Zentrix Infotech manages Search, Display, and remarketing campaigns that convert. Get a free consultation today.",
  keywords:
    "Google Ads for hotels in Ayodhya, hotel PPC services Ayodhya, hotel Google advertising agency Ayodhya, hotel search ads Ayodhya, hotel remarketing campaigns Ayodhya, hospitality PPC company Ayodhya, Zentrix Infotech Ayodhya, hotel digital advertising Uttar Pradesh, hotel booking ads Ayodhya, PPC agency for hotels Ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/google-ads-hotels-ayodhya",
  },
  openGraph: {
    title: "Google Ads for Hotels in Ayodhya - Zentrix Infotech",
    description:
      "Increase direct bookings with expert Google Ads for hotels in Ayodhya. Zentrix Infotech manages Search, Display, and remarketing campaigns that convert. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/ayodhya/google-ads-hotels-ayodhya",
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
    title: "Google Ads for Hotels in Ayodhya - Zentrix Infotech",
    description:
      "Increase direct bookings with expert Google Ads for hotels in Ayodhya. Zentrix Infotech manages Search, Display, and remarketing campaigns that convert. Get a free consultation today.",
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