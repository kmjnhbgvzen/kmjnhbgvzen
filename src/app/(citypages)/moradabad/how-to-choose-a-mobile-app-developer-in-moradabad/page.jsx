import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "How to Choose a Mobile App Developer in Moradabad | Zentrix Infotech",
  description:
    "Learn how to choose a mobile app developer in Moradabad with this simple checklist. Compare skills, cost and support. Talk to Zentrix Infotech: +91 72488 00839.",
  keywords:
    "how to choose a mobile app developer in moradabad, how to choose app developer moradabad, choosing a mobile app development company moradabad, how to hire app developer moradabad, mobile app developer checklist, questions to ask app developer, best mobile app developer moradabad, mobile app developers in moradabad, mobile app development company moradabad, freelancer vs agency app development, app developer red flags, mobile app development tips moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/how-to-choose-a-mobile-app-developer-in-moradabad",
  },

  openGraph: {
    title: "How to Choose a Mobile App Developer in Moradabad | Zentrix Infotech",
    description:
      "Learn how to choose a mobile app developer in Moradabad with this simple checklist. Compare skills, cost and support. Talk to Zentrix Infotech: +91 72488 00839.",
    url: "https://www.zentrixinfotech.com/moradabad/how-to-choose-a-mobile-app-developer-in-moradabad",
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
    title: "How to Choose a Mobile App Developer in Moradabad | Zentrix Infotech",
    description:
      "Learn how to choose a mobile app developer in Moradabad with this simple checklist. Compare skills, cost and support. Talk to Zentrix Infotech: +91 72488 00839.",
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