import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Mobile App Development Services in Moradabad | Zentrix Infotech",
  description:
    "Get end-to-end mobile app development services in Moradabad: strategy, design, development, launch and support. Talk to Zentrix Infotech at +91 72488 00839.",
  keywords:
    "mobile app development services in moradabad, app development services in moradabad, mobile app design services moradabad, mobile app testing services moradabad, app launch services moradabad, app maintenance and support moradabad, mobile app strategy consulting moradabad, android app development services in moradabad, ios app development services in moradabad, flutter app development services moradabad, app store optimization services moradabad, end to end app development moradabad, mobile app development company moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/mobile-app-development-services-in-moradabad",
  },

  openGraph: {
    title: "Mobile App Development Services in Moradabad | Zentrix Infotech",
    description:
      "Get end-to-end mobile app development services in Moradabad: strategy, design, development, launch and support. Talk to Zentrix Infotech at +91 72488 00839.",
    url: "https://www.zentrixinfotech.com/moradabad/mobile-app-development-services-in-moradabad",
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
    title: "Mobile App Development Services in Moradabad | Zentrix Infotech",
    description:
      "Get end-to-end mobile app development services in Moradabad: strategy, design, development, launch and support. Talk to Zentrix Infotech at +91 72488 00839.",
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