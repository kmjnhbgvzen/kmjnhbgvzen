import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Professional App Developers in Moradabad | Zentrix Infotech",
  description:
    "Hire professional app developers in Moradabad. Zentrix Infotech builds secure Android, iOS and cross-platform apps with expert skills and clear pricing. Call now.",
  keywords:
    "professional app developers Moradabad, app developers in Moradabad, expert mobile app developers Moradabad, hire app developers Moradabad, Android app developers Moradabad, iOS app developers Moradabad, Flutter developers Moradabad, React Native developers Moradabad, mobile app development company Moradabad, experienced app developers near me, dedicated app developers India, custom app development Moradabad, app developers for startups, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/professional-app-developers-moradabad",
  },

  openGraph: {
    title:
      "Professional App Developers in Moradabad | Zentrix Infotech",
    description:
      "Hire professional app developers in Moradabad. Zentrix Infotech builds secure Android, iOS and cross-platform apps with expert skills and clear pricing. Call now.",
    url: "https://www.zentrixinfotech.com/moradabad/professional-app-developers-moradabad",
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
      "Professional App Developers in Moradabad | Zentrix Infotech",
    description:
      "Hire professional app developers in Moradabad. Zentrix Infotech builds secure Android, iOS and cross-platform apps with expert skills and clear pricing. Call now.",
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