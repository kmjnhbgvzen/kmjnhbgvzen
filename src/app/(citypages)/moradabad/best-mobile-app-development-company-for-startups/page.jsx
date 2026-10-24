import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Best Mobile App Development Company for Startups | Zentrix Infotech",
  description:
    "Zentrix Infotech is a mobile app development company for startups. We turn ideas into MVPs and scalable Android and iOS apps with clear pricing and honest guidance.",
  keywords:
    "best mobile app development company for startups, mobile app development for startups, startup app development company, MVP development company, MVP app development services, affordable app development for startups, mobile app development company India for startups, cross platform app development for startups, Android and iOS app development for startups, startup app developers for hire, app development partner for startups, custom app development for startups, low cost mobile app development startup, mobile app development company Moradabad, Zentrix Infotech mobile app development",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-mobile-app-development-company-for-startups",
  },

  openGraph: {
    title:
      "Best Mobile App Development Company for Startups | Zentrix Infotech",
    description:
      "Zentrix Infotech is a mobile app development company for startups. We turn ideas into MVPs and scalable Android and iOS apps with clear pricing and honest guidance.",
    url:
      "https://www.zentrixinfotech.com/moradabad/best-mobile-app-development-company-for-startups",
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
      "Best Mobile App Development Company for Startups | Zentrix Infotech",
    description:
      "Zentrix Infotech is a mobile app development company for startups. We turn ideas into MVPs and scalable Android and iOS apps with clear pricing and honest guidance.",
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