import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "PPC Services for Restaurants USA | Fill More Tables Fast",
  description:
    "Drive more reservations, orders, and foot traffic with expert PPC services for restaurants in the USA. Targeted Google Ads and local ad campaigns that convert.",
  keywords:
    "ppc services for restaurants usa, restaurant ppc management, google ads for restaurants usa, restaurant paid advertising services, ppc agency for restaurants, restaurant marketing ppc, local ppc for restaurants, restaurant google ads agency, ppc for food delivery usa, restaurant digital advertising usa, restaurant ppc consultant, restaurant ad campaign management",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/usa/ppc-services-for-restaurants-usa",
  },
  openGraph: {
    title: "PPC Services for Restaurants USA | Fill More Tables Fast",
    description:
      "Drive more reservations, orders, and foot traffic with expert PPC services for restaurants in the USA. Targeted Google Ads and local ad campaigns that convert.",
    url: "https://www.zentrixinfotech.com/usa/ppc-services-for-restaurants-usa",
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
    title: "PPC Services for Restaurants USA | Fill More Tables Fast",
    description:
      "Drive more reservations, orders, and foot traffic with expert PPC services for restaurants in the USA. Targeted Google Ads and local ad campaigns that convert.",
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