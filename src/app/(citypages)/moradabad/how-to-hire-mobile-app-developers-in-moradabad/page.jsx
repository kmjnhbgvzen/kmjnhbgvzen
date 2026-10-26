import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "How to Hire Mobile App Developers in Moradabad | Zentrix Infotech",
  description:
    "Learn how to hire mobile app developers in Moradabad step by step: brief, shortlist, trial, contract and onboarding. Talk to Zentrix Infotech: +91 72488 00839.",
  keywords:
    "how to hire mobile app developers in moradabad, how to hire app developers moradabad, steps to hire mobile app developer, hiring process for app developers, mobile app developer interview questions, app developer contract checklist, how to onboard app developers, trial project app developer, hire mobile app developers moradabad, mobile app developers for hire moradabad, mobile app development company moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/how-to-hire-mobile-app-developers-in-moradabad",
  },

  openGraph: {
    title: "How to Hire Mobile App Developers in Moradabad | Zentrix Infotech",
    description:
      "Learn how to hire mobile app developers in Moradabad step by step: brief, shortlist, trial, contract and onboarding. Talk to Zentrix Infotech: +91 72488 00839.",
    url: "https://www.zentrixinfotech.com/moradabad/how-to-hire-mobile-app-developers-in-moradabad",
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
    title: "How to Hire Mobile App Developers in Moradabad | Zentrix Infotech",
    description:
      "Learn how to hire mobile app developers in Moradabad step by step: brief, shortlist, trial, contract and onboarding. Talk to Zentrix Infotech: +91 72488 00839.",
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