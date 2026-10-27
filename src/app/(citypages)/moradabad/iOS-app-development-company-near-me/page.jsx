import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "iOS App Development Company Near Me | Zentrix Infotech",
  description:
    "Looking for an iOS app development company near you? Zentrix Infotech builds secure Swift iPhone apps with local support, clear pricing and App Store launch help.",
  keywords:
    "iOS app development company near me, iOS app developers near me, iPhone app development company near me, iOS app development company in Moradabad, iOS app development company in Ghaziabad, local iOS app developers, hire iOS developers near me, best iOS app development company near me, affordable iOS app development near me, Swift app development company, iOS app development services, iPhone app developers near me, mobile app development company near me, iOS app development cost, custom iOS app development",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/iOS-app-development-company-near-me",
  },


  openGraph: {
    title: "iOS App Development Company Near Me | Zentrix Infotech",
    description:
      "Looking for an iOS app development company near you? Zentrix Infotech builds secure Swift iPhone apps with local support, clear pricing and App Store launch help.",
    url: "https://www.zentrixinfotech.com/moradabad/iOS-app-development-company-near-me",
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
    title: "iOS App Development Company Near Me | Zentrix Infotech",
    description:
      "Looking for an iOS app development company near you? Zentrix Infotech builds secure Swift iPhone apps with local support, clear pricing and App Store launch help.",
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