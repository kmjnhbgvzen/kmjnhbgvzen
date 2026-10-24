import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Top Mobile App Development Services | Zentrix Infotech",
  description:
    "Explore top mobile app development services from Zentrix Infotech: Android, iOS, cross platform, UI/UX, e-commerce and enterprise apps, built secure and scalable.",
  keywords:
    "top mobile app development services, mobile app development services, best mobile app development services, mobile app development services India, Android app development services, iOS app development services, cross platform app development services, custom mobile app development services, mobile app UI/UX design services, e-commerce mobile app development services, enterprise mobile app development services, mobile app maintenance and support services, affordable mobile app development services, mobile app development services for startups, Zentrix Infotech mobile app development",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/top-mobile-app-development-services",
  },

  openGraph: {
    title: "Top Mobile App Development Services | Zentrix Infotech",
    description:
      "Explore top mobile app development services from Zentrix Infotech: Android, iOS, cross platform, UI/UX, e-commerce and enterprise apps, built secure and scalable.",
    url: "https://www.zentrixinfotech.com/moradabad/top-mobile-app-development-services",
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
    title: "Top Mobile App Development Services | Zentrix Infotech",
    description:
      "Explore top mobile app development services from Zentrix Infotech: Android, iOS, cross platform, UI/UX, e-commerce and enterprise apps, built secure and scalable.",
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