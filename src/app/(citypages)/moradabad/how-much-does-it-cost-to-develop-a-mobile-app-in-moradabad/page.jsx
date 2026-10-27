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
    "How much does it cost to develop a mobile app in Moradabad? See price ranges, cost factors and savings tips, and get a free estimate from Zentrix Infotech.",
  keywords:
    "how much does it cost to develop a mobile app in Moradabad, mobile app development cost in Moradabad, app development cost Moradabad, cost to build an app in Moradabad, mobile app development price Moradabad, affordable mobile app development Moradabad, android app development cost Moradabad, iOS app development cost Moradabad, mobile app development company Moradabad, app development cost for startups, e-commerce app development cost Moradabad, mobile app cost estimate, MVP app development cost, app development quote Moradabad, mobile app developers near me",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/how-much-does-it-cost-to-develop-a-mobile-app-in-moradabad",
  },


  openGraph: {
    title: "Mobile App Development Cost in Moradabad | Zentrix Infotech",
    description:
      "How much does it cost to develop a mobile app in Moradabad? See price ranges, cost factors and savings tips, and get a free estimate from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/how-much-does-it-cost-to-develop-a-mobile-app-in-moradabad",
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
      "How much does it cost to develop a mobile app in Moradabad? See price ranges, cost factors and savings tips, and get a free estimate from Zentrix Infotech.",
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