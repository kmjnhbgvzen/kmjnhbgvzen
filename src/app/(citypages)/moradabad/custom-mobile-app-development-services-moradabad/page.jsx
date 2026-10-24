import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Custom Mobile App Development Services Moradabad | Zentrix Infotech",
  description:
    "Get custom mobile app development services in Moradabad from Zentrix Infotech. Tailor-made Android and iOS apps, design, integration and support for local businesses.",
  keywords:
    "custom mobile app development services Moradabad, custom app development services Moradabad, custom mobile app development Moradabad, bespoke app development Moradabad, tailor-made mobile apps Moradabad, custom Android app development Moradabad, custom iOS app development Moradabad, custom e-commerce app development Moradabad, custom business app development Moradabad, affordable custom app development Moradabad, mobile app UI/UX design services Moradabad, app integration services Moradabad, app maintenance services Moradabad, custom app development for startups Moradabad, Zentrix Infotech custom app development",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/custom-mobile-app-development-services-moradabad",
  },

  openGraph: {
    title:
      "Custom Mobile App Development Services Moradabad | Zentrix Infotech",
    description:
      "Get custom mobile app development services in Moradabad from Zentrix Infotech. Tailor-made Android and iOS apps, design, integration and support for local businesses.",
    url:
      "https://www.zentrixinfotech.com/moradabad/custom-mobile-app-development-services-moradabad",
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
      "Custom Mobile App Development Services Moradabad | Zentrix Infotech",
    description:
      "Get custom mobile app development services in Moradabad from Zentrix Infotech. Tailor-made Android and iOS apps, design, integration and support for local businesses.",
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