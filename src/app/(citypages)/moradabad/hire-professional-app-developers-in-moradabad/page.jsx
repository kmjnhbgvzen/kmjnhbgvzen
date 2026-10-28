import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Hire Professional App Developers in Moradabad | Zentrix",
  description:
    "Hire professional app developers in Moradabad for Android, iOS and cross-platform apps. Zentrix Infotech offers flexible hiring, clear pricing and full support.",
  keywords:
    "hire professional app developers in Moradabad, hire app developers Moradabad, hire mobile app developers Moradabad, hire Android developers Moradabad, hire iOS developers Moradabad, hire Flutter developers, hire React Native developers, dedicated app developers for hire, app developers for hire India, hire app development team, hire app developers for startups, app developers near me, monthly hiring app developers, app developer hiring process, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/hire-professional-app-developers-in-moradabad",
  },

  openGraph: {
    title:
      "Hire Professional App Developers in Moradabad | Zentrix",
    description:
      "Hire professional app developers in Moradabad for Android, iOS and cross-platform apps. Zentrix Infotech offers flexible hiring, clear pricing and full support.",
    url: "https://www.zentrixinfotech.com/moradabad/hire-professional-app-developers-in-moradabad",
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
    title:
      "Hire Professional App Developers in Moradabad | Zentrix",
    description:
      "Hire professional app developers in Moradabad for Android, iOS and cross-platform apps. Zentrix Infotech offers flexible hiring, clear pricing and full support.",
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