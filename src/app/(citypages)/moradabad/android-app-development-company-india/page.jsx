import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Android App Development Company India | Zentrix Infotech",
  description:
    "Zentrix Infotech is an Android app development company in India building fast, secure, custom Android apps for startups and enterprises. Get a free quote today.",
  keywords:
    "android app development company India, android app development services India, custom android app development India, best android app development company in India, android app developers India, hire android app developers India, affordable android app development India, android app development company for startups, native android app development, Kotlin android app development, android app development cost in India, android app development company in Moradabad, android app development company near me, android mobile app development services, enterprise android app development",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/android-app-development-company-india",
  },

  openGraph: {
    title: "Android App Development Company India | Zentrix Infotech",
    description:
      "Zentrix Infotech is an Android app development company in India building fast, secure, custom Android apps for startups and enterprises. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/moradabad/android-app-development-company-india",
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
    title: "Android App Development Company India | Zentrix Infotech",
    description:
      "Zentrix Infotech is an Android app development company in India building fast, secure, custom Android apps for startups and enterprises. Get a free quote today.",
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