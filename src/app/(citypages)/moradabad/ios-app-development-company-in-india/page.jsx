import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "iOS App Development Company in India | Zentrix Infotech",
  description:
    "Zentrix Infotech is an iOS app development company in India building secure, high-performance iPhone and iPad apps for startups and enterprises. Get a free quote today.",
  keywords:
    "iOS app development company in India, iOS app development services India, custom iOS app development India, best iOS app development company in India, iPhone app development company India, iPad app development services, hire iOS app developers India, affordable iOS app development India, iOS app developers for startups, Swift app development company, native iOS app development, iOS app development cost in India, iOS app development company in Moradabad, iOS app development company near me, enterprise iOS app development",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/ios-app-development-company-in-india",
  },

  openGraph: {
    title: "iOS App Development Company in India | Zentrix Infotech",
    description:
      "Zentrix Infotech is an iOS app development company in India building secure, high-performance iPhone and iPad apps for startups and enterprises. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/moradabad/ios-app-development-company-in-india",
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
    title: "iOS App Development Company in India | Zentrix Infotech",
    description:
      "Zentrix Infotech is an iOS app development company in India building secure, high-performance iPhone and iPad apps for startups and enterprises. Get a free quote today.",
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