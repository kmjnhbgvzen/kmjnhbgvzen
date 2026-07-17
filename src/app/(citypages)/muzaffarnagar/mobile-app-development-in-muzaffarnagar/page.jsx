import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Mobile App Development in Muzaffarnagar | Android & iOS Apps",
  description:
    "Expert Mobile App Development in Muzaffarnagar for Android, iOS & cross-platform apps. Custom, scalable, and affordable app solutions for every business.",
  keywords:
    "mobile app development in muzaffarnagar, mobile app development company muzaffarnagar, android app development muzaffarnagar, ios app development muzaffarnagar, app development agency near me, custom mobile app development company, cross platform app development muzaffarnagar, ecommerce app development muzaffarnagar, best app developers muzaffarnagar, digital marketing agency muzaffarnagar, business app development services, on demand app development india",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/mobile-app-development-in-muzaffarnagar",
  },
  openGraph: {
    title: "Mobile App Development in Muzaffarnagar | Android & iOS Apps",
    description:
      "Expert Mobile App Development in Muzaffarnagar for Android, iOS & cross-platform apps. Custom, scalable, and affordable app solutions for every business.",
    url: "https://www.zentrixinfotech.com/mobile-app-development-in-muzaffarnagar",
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
    title: "Mobile App Development in Muzaffarnagar | Android & iOS Apps",
    description:
      "Expert Mobile App Development in Muzaffarnagar for Android, iOS & cross-platform apps. Custom, scalable, and affordable app solutions for every business.",
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