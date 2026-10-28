import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "App Development Company in Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a trusted app development company in Moradabad. We build Android, iOS and cross-platform apps with clear pricing and full support. Get a quote.",
  keywords:
    "app development company in Moradabad, mobile app development company Moradabad, app development company near me, Android app development company Moradabad, iOS app development company Moradabad, cross platform app development company, custom app development company, e-commerce app development company, business app development company, startup app development company, app development company India, app development services Moradabad, trusted app development company, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/app-development-company-in-moradabad",
  },

  openGraph: {
    title:
      "App Development Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted app development company in Moradabad. We build Android, iOS and cross-platform apps with clear pricing and full support. Get a quote.",
    url: "https://www.zentrixinfotech.com/moradabad/app-development-company-in-moradabad",
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
      "App Development Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted app development company in Moradabad. We build Android, iOS and cross-platform apps with clear pricing and full support. Get a quote.",
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