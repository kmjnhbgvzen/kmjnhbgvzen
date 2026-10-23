import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Top Mobile App Development Companies in Moradabad | Zentrix",
  description:
    "Looking for the top mobile app development companies in Moradabad? Learn how to choose the best one and why Zentrix Infotech builds Android and iOS apps that grow businesses.",
  keywords:
    "top mobile app development companies in Moradabad, mobile app development company in Moradabad, best mobile app development company in Moradabad, android app development company Moradabad, iOS app development company Moradabad, app developers in Moradabad, mobile app development services Moradabad, affordable mobile app development Moradabad, custom mobile app development Moradabad, mobile app development company near me, hire mobile app developers in Moradabad, app development company in Uttar Pradesh, cross platform app development Moradabad, Flutter app development company Moradabad, mobile app development cost in Moradabad",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/top-mobile-app-development-companies-in-moradabad",
  },

  openGraph: {
    title: "Top Mobile App Development Companies in Moradabad | Zentrix",
    description:
      "Looking for the top mobile app development companies in Moradabad? Learn how to choose the best one and why Zentrix Infotech builds Android and iOS apps that grow businesses.",
    url: "https://www.zentrixinfotech.com/moradabad/top-mobile-app-development-companies-in-moradabad",
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
    title: "Top Mobile App Development Companies in Moradabad | Zentrix",
    description:
      "Looking for the top mobile app development companies in Moradabad? Learn how to choose the best one and why Zentrix Infotech builds Android and iOS apps that grow businesses.",
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