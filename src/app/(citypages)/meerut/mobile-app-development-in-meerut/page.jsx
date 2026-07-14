import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Mobile App Development in Meerut | Android, iOS & Cross-Platform Apps",
  description:
    "Looking for reliable mobile app development in Meerut? We build Android, iOS & cross-platform apps that are fast, scalable & user-friendly. Get a free consultation today.",
  keywords:
    "mobile app development in Meerut, mobile app development company Meerut, Android app development Meerut, iOS app development Meerut, app development agency Uttar Pradesh, custom mobile app development, cross platform app development services, app development for startups Meerut, e-commerce app development, best app development company near me, on-demand app development Meerut",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/mobile-app-development-in-meerut",
  },
  openGraph: {
    title: "Mobile App Development in Meerut | Android, iOS & Cross-Platform Apps",
    description:
      "Looking for reliable mobile app development in Meerut? We build Android, iOS & cross-platform apps that are fast, scalable & user-friendly. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/meerut/mobile-app-development-in-meerut",
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
    title: "Mobile App Development in Meerut | Android, iOS & Cross-Platform Apps",
    description:
      "Looking for reliable mobile app development in Meerut? We build Android, iOS & cross-platform apps that are fast, scalable & user-friendly. Get a free consultation today.",
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