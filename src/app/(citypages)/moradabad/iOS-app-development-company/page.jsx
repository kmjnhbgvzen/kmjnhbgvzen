import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "iOS App Development Company | Zentrix Infotech",
  description:
    "Zentrix Infotech is an iOS app development company building secure, high-performance iPhone and iPad apps in Swift for startups and businesses. Get a free quote.",
  keywords:
    "iOS app development company, iOS app development services, iPhone app development company, iPad app development, custom iOS app development, native iOS app development, Swift app development company, SwiftUI app development, hire iOS app developers, iOS app developers for startups, enterprise iOS app development, iOS app development cost, App Store app publishing services, iOS app design and development, iOS app development company in Moradabad",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/iOS-app-development-company",
  },


  openGraph: {
    title: "iOS App Development Company | Zentrix Infotech",
    description:
      "Zentrix Infotech is an iOS app development company building secure, high-performance iPhone and iPad apps in Swift for startups and businesses. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/iOS-app-development-company",
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
    title: "iOS App Development Company | Zentrix Infotech",
    description:
      "Zentrix Infotech is an iOS app development company building secure, high-performance iPhone and iPad apps in Swift for startups and businesses. Get a free quote.",
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