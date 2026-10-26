import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Mobile App Developers in Moradabad for Hire | Zentrix Infotech",
  description:
    "Hire the best mobile app developers in Moradabad. Skilled Android, iOS and Flutter experts with proven results. Get a free quote from Zentrix Infotech: +91 72488 00839.",
  keywords:
    "best mobile app developers in moradabad for hire, best mobile app developers moradabad, top mobile app developers moradabad, hire best app developers moradabad, expert mobile app developers moradabad, skilled android developers moradabad, experienced ios developers moradabad, flutter developers for hire moradabad, react native developers for hire moradabad, mobile app developers for hire moradabad, professional app developers moradabad, trusted app developers moradabad, mobile app development company moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-mobile-app-developers-in-moradabad-for-hire",
  },

  openGraph: {
    title: "Best Mobile App Developers in Moradabad for Hire | Zentrix Infotech",
    description:
      "Hire the best mobile app developers in Moradabad. Skilled Android, iOS and Flutter experts with proven results. Get a free quote from Zentrix Infotech: +91 72488 00839.",
    url: "https://www.zentrixinfotech.com/moradabad/best-mobile-app-developers-in-moradabad-for-hire",
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
    title: "Best Mobile App Developers in Moradabad for Hire | Zentrix Infotech",
    description:
      "Hire the best mobile app developers in Moradabad. Skilled Android, iOS and Flutter experts with proven results. Get a free quote from Zentrix Infotech: +91 72488 00839.",
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