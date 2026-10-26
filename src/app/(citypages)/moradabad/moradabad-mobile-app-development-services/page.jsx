import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Moradabad Mobile App Development Services | Zentrix Infotech",
  description:
    "Explore mobile app development services in Moradabad: Android, iOS, cross-platform, e-commerce and custom apps by Zentrix Infotech. Call +91 72488 00839.",
  keywords:
    "moradabad mobile app development services, mobile app development services in moradabad, app development services moradabad, android app development services moradabad, ios app development services moradabad, cross platform app development services moradabad, custom app development services moradabad, ecommerce app development services moradabad, app ui ux design services moradabad, app maintenance services moradabad, enterprise app development moradabad, startup app development services moradabad, mobile app development company moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-mobile-app-development-services",
  },

  openGraph: {
    title: "Moradabad Mobile App Development Services | Zentrix Infotech",
    description:
      "Explore mobile app development services in Moradabad: Android, iOS, cross-platform, e-commerce and custom apps by Zentrix Infotech. Call +91 72488 00839.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-mobile-app-development-services",
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
    title: "Moradabad Mobile App Development Services | Zentrix Infotech",
    description:
      "Explore mobile app development services in Moradabad: Android, iOS, cross-platform, e-commerce and custom apps by Zentrix Infotech. Call +91 72488 00839.",
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