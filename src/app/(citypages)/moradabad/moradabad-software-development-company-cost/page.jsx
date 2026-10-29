import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Software Development Company Cost in Moradabad | Zentrix Infotech",
  description:
    "Know the real software development cost in Moradabad. Zentrix Infotech explains pricing factors, budget ranges and ways to save. Get a free, detailed quote today.",
  keywords:
    "moradabad software development company cost, software development cost in moradabad, custom software development cost moradabad, software development company moradabad price, software development pricing moradabad, cost of building software in moradabad, affordable software development company moradabad, ERP software cost moradabad, CRM software development cost, mobile app development cost moradabad, web application development cost moradabad, software development quote moradabad, how much does software development cost in india, software development company in moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-company-cost",
  },

  openGraph: {
    title:
      "Software Development Company Cost in Moradabad | Zentrix Infotech",
    description:
      "Know the real software development cost in Moradabad. Zentrix Infotech explains pricing factors, budget ranges and ways to save. Get a free, detailed quote today.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-company-cost",
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
    title:
      "Software Development Company Cost in Moradabad | Zentrix Infotech",
    description:
      "Know the real software development cost in Moradabad. Zentrix Infotech explains pricing factors, budget ranges and ways to save. Get a free, detailed quote today.",
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