import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "iOS App Development Cost in Moradabad | Zentrix Infotech",
  description:
    "What does iOS app development cost in Moradabad? See price ranges, cost factors, hidden fees and savings tips, and get a free estimate from Zentrix Infotech.",
  keywords:
    "iOS app development cost in Moradabad, iPhone app development cost Moradabad, cost to build an iOS app in Moradabad, iOS app development price Moradabad, how much does an iOS app cost in India, affordable iOS app development Moradabad, iOS app development company Moradabad, iOS app cost for startups, iOS vs Android app development cost, iPad app development cost, cost of publishing an app on the App Store, iOS MVP development cost, iOS app development quote Moradabad, iOS app cost estimate, iOS app developers near me",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/iOS-app-development-cost-in-moradabad",
  },


  openGraph: {
    title: "iOS App Development Cost in Moradabad | Zentrix Infotech",
    description:
      "What does iOS app development cost in Moradabad? See price ranges, cost factors, hidden fees and savings tips, and get a free estimate from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/iOS-app-development-cost-in-moradabad",
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
    title: "iOS App Development Cost in Moradabad | Zentrix Infotech",
    description:
      "What does iOS app development cost in Moradabad? See price ranges, cost factors, hidden fees and savings tips, and get a free estimate from Zentrix Infotech.",
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