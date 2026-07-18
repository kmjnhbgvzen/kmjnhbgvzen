import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Google Ads for Restaurants in Dubai | Reservation & Footfall Experts",
  description:
    "Fill more tables with Google Ads for restaurants in Dubai. Targeted campaigns for reservations, delivery orders & footfall built to lower cost per booking.",
  keywords:
    "google ads for restaurants in dubai, restaurant ppc dubai, restaurant advertising agency dubai, food and beverage marketing dubai, google ads for cafes dubai, restaurant digital marketing agency uae, restaurant reservation marketing dubai, restaurant local seo dubai, dining ads dubai, restaurant promotion agency dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/google-ads-restaurants-dubai",
  },

  openGraph: {
    title: "Google Ads for Restaurants in Dubai | Reservation & Footfall Experts",
    description:
      "Fill more tables with Google Ads for restaurants in Dubai. Targeted campaigns for reservations, delivery orders & footfall built to lower cost per booking.",
    url: "https://www.zentrixinfotech.com/dubai/google-ads-restaurants-dubai",
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
    title: "Google Ads for Restaurants in Dubai | Reservation & Footfall Experts",
    description:
      "Fill more tables with Google Ads for restaurants in Dubai. Targeted campaigns for reservations, delivery orders & footfall built to lower cost per booking.",
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