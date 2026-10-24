import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Mobile App Development Company | Zentrix Infotech",
  description:
    "Looking for the best mobile app development company? Zentrix Infotech builds secure, scalable Android and iOS apps with 250+ projects delivered and a 4.7/5 rating.",
  keywords:
    "best mobile app development company, top mobile app development company, mobile app development company India, best mobile app developers, Android app development company, iOS app development company, custom mobile app development company, affordable mobile app development company, mobile app development company for startups, mobile app development company Moradabad, mobile app development company Ghaziabad, hire mobile app developers, end-to-end mobile app development, trusted mobile app development company, Zentrix Infotech mobile app development",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-mobile-app-development-company",
  },

  openGraph: {
    title: "Best Mobile App Development Company | Zentrix Infotech",
    description:
      "Looking for the best mobile app development company? Zentrix Infotech builds secure, scalable Android and iOS apps with 250+ projects delivered and a 4.7/5 rating.",
    url: "https://www.zentrixinfotech.com/moradabad/best-mobile-app-development-company",
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
    title: "Best Mobile App Development Company | Zentrix Infotech",
    description:
      "Looking for the best mobile app development company? Zentrix Infotech builds secure, scalable Android and iOS apps with 250+ projects delivered and a 4.7/5 rating.",
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