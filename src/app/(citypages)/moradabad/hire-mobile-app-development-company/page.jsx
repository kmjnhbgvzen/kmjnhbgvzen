import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Hire Mobile App Development Company | Zentrix Infotech",
  description:
    "Ready to hire a mobile app development company? Zentrix Infotech builds secure, scalable Android and iOS apps with clear pricing, regular updates and ongoing support.",
  keywords:
    "hire mobile app development company, hire app development company, hire mobile app development company in India, hire mobile app developers, hire Android app development company, hire iOS app development company, hire cross platform app development company, hire custom mobile app development company, how to hire a mobile app development company, hire app development company for startups, affordable mobile app development company to hire, mobile app development company for hire, hire app developers Moradabad, hire app developers Ghaziabad, Zentrix Infotech mobile app development",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/hire-mobile-app-development-company",
  },

  openGraph: {
    title: "Hire Mobile App Development Company | Zentrix Infotech",
    description:
      "Ready to hire a mobile app development company? Zentrix Infotech builds secure, scalable Android and iOS apps with clear pricing, regular updates and ongoing support.",
    url:
      "https://www.zentrixinfotech.com/moradabad/hire-mobile-app-development-company",
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
    title: "Hire Mobile App Development Company | Zentrix Infotech",
    description:
      "Ready to hire a mobile app development company? Zentrix Infotech builds secure, scalable Android and iOS apps with clear pricing, regular updates and ongoing support.",
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