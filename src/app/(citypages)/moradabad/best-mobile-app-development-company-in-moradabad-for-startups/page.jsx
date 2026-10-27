import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Best Mobile App Development Company in Moradabad for Startups",
  description:
    "Launch your startup app with Zentrix Infotech, a mobile app development company in Moradabad offering MVP development, Android, iOS and cross-platform apps. Get a free quote.",
  keywords:
    "best mobile app development company in Moradabad for startups, mobile app development for startups Moradabad, startup app developers Moradabad, MVP development company Moradabad, affordable app development for startups, mobile app development company Moradabad, Android app development for startups, iOS app development for startups, cross platform app development for startups, startup app development company India, hire app developers for startup, MVP app development services, app development company near me, custom app development for startups, startup mobile app development cost",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-mobile-app-development-company-in-moradabad-for-startups",
  },


  openGraph: {
    title: "Best Mobile App Development Company in Moradabad for Startups",
    description:
      "Launch your startup app with Zentrix Infotech, a mobile app development company in Moradabad offering MVP development, Android, iOS and cross-platform apps. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/best-mobile-app-development-company-in-moradabad-for-startups",
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
    title: "Best Mobile App Development Company in Moradabad for Startups",
    description:
      "Launch your startup app with Zentrix Infotech, a mobile app development company in Moradabad offering MVP development, Android, iOS and cross-platform apps. Get a free quote.",
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