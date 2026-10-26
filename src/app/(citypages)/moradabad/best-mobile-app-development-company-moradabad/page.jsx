import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Mobile App Development Company Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a trusted mobile app development company in Moradabad. Get custom Android, iOS and cross-platform apps built right. Call +91 72488 00839.",
  keywords:
    "best mobile app development company moradabad, top mobile app development company moradabad, mobile app development company in moradabad, best app development company moradabad, best android app development company moradabad, best ios app development company moradabad, custom mobile app development moradabad, trusted app developers moradabad, mobile app developers in moradabad, cross platform app development moradabad, ecommerce app development moradabad, startup app development moradabad, app development company near me moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-mobile-app-development-company-moradabad",
  },

  openGraph: {
    title: "Best Mobile App Development Company Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted mobile app development company in Moradabad. Get custom Android, iOS and cross-platform apps built right. Call +91 72488 00839.",
    url: "https://www.zentrixinfotech.com/moradabad/best-mobile-app-development-company-moradabad",
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
    title: "Best Mobile App Development Company Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted mobile app development company in Moradabad. Get custom Android, iOS and cross-platform apps built right. Call +91 72488 00839.",
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