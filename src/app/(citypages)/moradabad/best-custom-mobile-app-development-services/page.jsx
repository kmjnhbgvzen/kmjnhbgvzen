import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Custom Mobile App Development Services | Zentrix Infotech",
  description:
    "Zentrix Infotech offers the best custom mobile app development services for Android and iOS. Get secure, scalable, user-friendly apps built around your business goals.",
  keywords:
    "best custom mobile app development services, custom mobile app development company, custom mobile app development services India, bespoke mobile app development, custom Android app development, custom iOS app development, tailor-made mobile app solutions, enterprise mobile app development, mobile app development for startups, affordable custom mobile app development, custom app developers for hire, end-to-end mobile app development, mobile app development company Moradabad, mobile app UI/UX design services, Zentrix Infotech mobile app development",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-custom-mobile-app-development-services",
  },

  openGraph: {
    title: "Best Custom Mobile App Development Services | Zentrix Infotech",
    description:
      "Zentrix Infotech offers the best custom mobile app development services for Android and iOS. Get secure, scalable, user-friendly apps built around your business goals.",
    url: "https://www.zentrixinfotech.com/moradabad/best-custom-mobile-app-development-services",
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
    title: "Best Custom Mobile App Development Services | Zentrix Infotech",
    description:
      "Zentrix Infotech offers the best custom mobile app development services for Android and iOS. Get secure, scalable, user-friendly apps built around your business goals.",
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