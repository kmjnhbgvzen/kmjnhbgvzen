import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Best App Development Company in Moradabad | Zentrix Infotech",
  description:
    "Compare the best app development company in Moradabad on skills, pricing, security and support. See why businesses choose Zentrix Infotech. Get a free quote.",
  keywords:
    "best app development company in Moradabad, top app development company Moradabad, best mobile app development company Moradabad, trusted app development company Moradabad, best Android app development company, best iOS app development company, best custom app development company, app development company comparison, how to choose app development company, reliable app development company near me, app development company with portfolio, affordable app development company Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-app-development-company-in-moradabad",
  },

  openGraph: {
    title:
      "Best App Development Company in Moradabad | Zentrix Infotech",
    description:
      "Compare the best app development company in Moradabad on skills, pricing, security and support. See why businesses choose Zentrix Infotech. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/best-app-development-company-in-moradabad",
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
      "Best App Development Company in Moradabad | Zentrix Infotech",
    description:
      "Compare the best app development company in Moradabad on skills, pricing, security and support. See why businesses choose Zentrix Infotech. Get a free quote.",
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