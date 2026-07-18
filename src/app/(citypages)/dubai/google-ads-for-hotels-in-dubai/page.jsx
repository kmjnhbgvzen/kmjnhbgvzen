import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Google Ads for Hotels in Dubai | Direct Booking & Occupancy Experts",
  description:
    "Increase direct bookings with Google Ads for hotels in Dubai. Targeted Search, Hotel Ads & remarketing campaigns built to lower cost per booking and OTA dependency.",
  keywords:
    "google ads for hotels in dubai, hotel ppc dubai, hotel advertising agency dubai, hotel digital marketing dubai, google hotel ads dubai, hospitality marketing agency uae, direct booking campaigns dubai, resort advertising dubai, hotel marketing company dubai, tourism ppc dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/google-ads-hotels-dubai",
  },

  openGraph: {
    title: "Google Ads for Hotels in Dubai | Direct Booking & Occupancy Experts",
    description:
      "Increase direct bookings with Google Ads for hotels in Dubai. Targeted Search, Hotel Ads & remarketing campaigns built to lower cost per booking and OTA dependency.",
    url: "https://www.zentrixinfotech.com/dubai/google-ads-hotels-dubai",
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
    title: "Google Ads for Hotels in Dubai | Direct Booking & Occupancy Experts",
    description:
      "Increase direct bookings with Google Ads for hotels in Dubai. Targeted Search, Hotel Ads & remarketing campaigns built to lower cost per booking and OTA dependency.",
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