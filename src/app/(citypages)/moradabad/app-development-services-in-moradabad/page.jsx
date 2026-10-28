import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "App Development Services in Moradabad | Zentrix Infotech",
  description:
    "Explore app development services in Moradabad by Zentrix Infotech: Android, iOS, cross-platform, e-commerce and enterprise apps with clear scope and pricing.",
  keywords:
    "app development services in Moradabad, mobile app development services Moradabad, Android app development services, iOS app development services, cross platform app development services, e-commerce app development services, enterprise app development services, custom app development services Moradabad, app UI UX design services, app maintenance services, app development packages, app development company Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/app-development-services-in-moradabad",
  },

  openGraph: {
    title:
      "App Development Services in Moradabad | Zentrix Infotech",
    description:
      "Explore app development services in Moradabad by Zentrix Infotech: Android, iOS, cross-platform, e-commerce and enterprise apps with clear scope and pricing.",
    url: "https://www.zentrixinfotech.com/moradabad/app-development-services-in-moradabad",
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
      "App Development Services in Moradabad | Zentrix Infotech",
    description:
      "Explore app development services in Moradabad by Zentrix Infotech: Android, iOS, cross-platform, e-commerce and enterprise apps with clear scope and pricing.",
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