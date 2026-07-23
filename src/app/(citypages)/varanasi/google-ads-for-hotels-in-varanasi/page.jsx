import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Google Ads for Hotels in Varanasi | Get More Bookings",
  description:
    "Expert Google Ads for hotels in Varanasi — get direct bookings, reduce OTA commissions, and reach travellers searching now. Free ad account audit today.",
  keywords:
    "Google Ads for hotels in Varanasi, hotel PPC agency Varanasi, hotel digital marketing Varanasi, direct booking ads Varanasi, hotel advertising company Varanasi, Google Hotel Ads Varanasi, PPC for hospitality UP, hotel marketing agency Varanasi, increase hotel bookings Varanasi",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/varanasi/google-ads-for-hotels-in-varanasi",
  },
  openGraph: {
    title: "Google Ads for Hotels in Varanasi | Get More Bookings",
    description:
      "Expert Google Ads for hotels in Varanasi — get direct bookings, reduce OTA commissions, and reach travellers searching now. Free ad account audit today.",
    url: "https://www.zentrixinfotech.com/varanasi/google-ads-for-hotels-in-varanasi",
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
    title: "Google Ads for Hotels in Varanasi | Get More Bookings",
    description:
      "Expert Google Ads for hotels in Varanasi — get direct bookings, reduce OTA commissions, and reach travellers searching now. Free ad account audit today.",
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