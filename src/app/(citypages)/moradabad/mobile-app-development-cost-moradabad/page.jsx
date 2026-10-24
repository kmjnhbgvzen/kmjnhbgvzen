import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Mobile App Development Cost in Moradabad | Zentrix Infotech",
  description:
    "Wondering about mobile app development cost in Moradabad? Learn what affects pricing, how to plan your budget and get a clear itemized quote from Zentrix Infotech.",
  keywords:
    "mobile app development cost Moradabad, app development cost in Moradabad, how much does it cost to build an app in Moradabad, mobile app development price Moradabad, mobile app development charges Moradabad, affordable app development Moradabad, Android app development cost Moradabad, iOS app development cost Moradabad, e-commerce app development cost Moradabad, custom app development cost Moradabad, cheap mobile app development Moradabad, app development quote Moradabad, mobile app development company Moradabad cost, app development budget for small business Moradabad, Zentrix Infotech app development cost",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/mobile-app-development-cost-moradabad",
  },

  openGraph: {
    title: "Mobile App Development Cost in Moradabad | Zentrix Infotech",
    description:
      "Wondering about mobile app development cost in Moradabad? Learn what affects pricing, how to plan your budget and get a clear itemized quote from Zentrix Infotech.",
    url:
      "https://www.zentrixinfotech.com/moradabad/mobile-app-development-cost-moradabad",
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
    title: "Mobile App Development Cost in Moradabad | Zentrix Infotech",
    description:
      "Wondering about mobile app development cost in Moradabad? Learn what affects pricing, how to plan your budget and get a clear itemized quote from Zentrix Infotech.",
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