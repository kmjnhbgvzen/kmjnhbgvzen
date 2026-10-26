import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Hire Mobile App Developers Moradabad | Zentrix Infotech",
  description:
    "Hire mobile app developers in Moradabad as a dedicated team. Android, iOS, Flutter and React Native experts with flexible plans. Call Zentrix Infotech: +91 72488 00839.",
  keywords:
    "hire mobile app developers moradabad, hire app developers moradabad, hire dedicated mobile app developers moradabad, hire mobile app development team moradabad, hire android app developers moradabad, hire ios app developers moradabad, hire flutter developers moradabad, hire react native developers moradabad, mobile app developers for hire moradabad, scale app development team moradabad, staff augmentation app developers moradabad, mobile app development company moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/hire-mobile-app-developers-moradabad",
  },

  openGraph: {
    title: "Hire Mobile App Developers Moradabad | Zentrix Infotech",
    description:
      "Hire mobile app developers in Moradabad as a dedicated team. Android, iOS, Flutter and React Native experts with flexible plans. Call Zentrix Infotech: +91 72488 00839.",
    url: "https://www.zentrixinfotech.com/moradabad/hire-mobile-app-developers-moradabad",
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
    title: "Hire Mobile App Developers Moradabad | Zentrix Infotech",
    description:
      "Hire mobile app developers in Moradabad as a dedicated team. Android, iOS, Flutter and React Native experts with flexible plans. Call Zentrix Infotech: +91 72488 00839.",
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