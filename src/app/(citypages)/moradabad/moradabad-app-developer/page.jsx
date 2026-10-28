import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Moradabad App Developer | Zentrix Infotech",
  description:
    "Need a Moradabad app developer you can trust? Zentrix Infotech offers skilled Android, iOS and cross-platform developers with clear pricing and full support.",
  keywords:
    "Moradabad app developer, app developer in Moradabad, mobile app developer Moradabad, Android app developer Moradabad, iOS app developer Moradabad, Flutter developer Moradabad, React Native developer Moradabad, freelance app developer Moradabad, app developer near me, local app developer Moradabad, custom app developer, hire app developer Moradabad, experienced app developer, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-app-developer",
  },

  openGraph: {
    title:
      "Moradabad App Developer | Zentrix Infotech",
    description:
      "Need a Moradabad app developer you can trust? Zentrix Infotech offers skilled Android, iOS and cross-platform developers with clear pricing and full support.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-app-developer",
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
      "Moradabad App Developer | Zentrix Infotech",
    description:
      "Need a Moradabad app developer you can trust? Zentrix Infotech offers skilled Android, iOS and cross-platform developers with clear pricing and full support.",
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