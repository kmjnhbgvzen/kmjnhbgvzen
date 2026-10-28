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
    "Complete app development services in Moradabad: Android, iOS, cross-platform, e-commerce and business apps. Zentrix Infotech delivers on time. Get a free quote.",
  keywords:
    "app development services Moradabad, mobile app development services Moradabad, app development company Moradabad, Android app development services, iOS app development services, cross platform app development services, custom app development Moradabad, e-commerce app development Moradabad, business app development services, app development near me, app maintenance and support services, UI UX design for mobile apps, startup app development services, enterprise app development Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/app-development-services-moradabad",
  },

  openGraph: {
    title:
      "App Development Services in Moradabad | Zentrix Infotech",
    description:
      "Complete app development services in Moradabad: Android, iOS, cross-platform, e-commerce and business apps. Zentrix Infotech delivers on time. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/app-development-services-moradabad",
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
      "Complete app development services in Moradabad: Android, iOS, cross-platform, e-commerce and business apps. Zentrix Infotech delivers on time. Get a free quote.",
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