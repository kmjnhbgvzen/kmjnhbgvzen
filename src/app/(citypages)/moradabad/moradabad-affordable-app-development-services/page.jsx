import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Affordable App Development Services Moradabad | Zentrix",
  description:
    "Affordable app development services in Moradabad by Zentrix Infotech. Android, iOS and cross-platform apps at transparent prices. Get a free quote today.",
  keywords:
    "affordable app development services Moradabad, app development company in Moradabad, cheap app development Moradabad, mobile app development Moradabad, Android app development Moradabad, iOS app development Moradabad, cross platform app development Moradabad, custom app development services, app development cost in Moradabad, low cost app development company, startup app development Moradabad, e-commerce app development Moradabad, hire app developers Moradabad, app development near me, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-affordable-app-development-services",
  },

  openGraph: {
    title:
      "Affordable App Development Services Moradabad | Zentrix",
    description:
      "Affordable app development services in Moradabad by Zentrix Infotech. Android, iOS and cross-platform apps at transparent prices. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-affordable-app-development-services",
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
      "Affordable App Development Services Moradabad | Zentrix",
    description:
      "Affordable app development services in Moradabad by Zentrix Infotech. Android, iOS and cross-platform apps at transparent prices. Get a free quote today.",
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