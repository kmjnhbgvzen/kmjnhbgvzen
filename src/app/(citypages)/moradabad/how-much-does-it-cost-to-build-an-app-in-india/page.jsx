import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "App Development Cost in India: Complete Guide | Zentrix",
  description:
    "How much does it cost to build an app in India? Learn cost ranges, key price factors and ways to save, with a free estimate from Zentrix Infotech.",
  keywords:
    "how much does it cost to build an app in India, mobile app development cost in India, app development cost in India, cost to develop an android app in India, iOS app development cost India, cost of building an app for startups, app development pricing India, mobile app cost calculator, cost to make an app in India, app development cost in Moradabad, affordable app development company India, MVP development cost India, e-commerce app development cost India, factors affecting app development cost, app development company India price",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/how-much-does-it-cost-to-build-an-app-in-india",
  },

  openGraph: {
    title: "App Development Cost in India: Complete Guide | Zentrix",
    description:
      "How much does it cost to build an app in India? Learn cost ranges, key price factors and ways to save, with a free estimate from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/how-much-does-it-cost-to-build-an-app-in-india",
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
    title: "App Development Cost in India: Complete Guide | Zentrix",
    description:
      "How much does it cost to build an app in India? Learn cost ranges, key price factors and ways to save, with a free estimate from Zentrix Infotech.",
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