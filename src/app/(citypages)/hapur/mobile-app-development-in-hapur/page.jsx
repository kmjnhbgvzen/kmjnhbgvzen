import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Mobile App Development in Hapur | Android & iOS App Company",
  description:
    "Looking for mobile app development in Hapur? Zentrix Infotech builds Android, iOS & cross-platform apps that help local businesses grow online.",
  keywords:
    "mobile app development in Hapur, app development company Hapur, android app development Hapur, ios app development company, mobile app developers near me, custom app development Hapur, cross platform app development company, e-commerce app development Hapur, on demand app development company, business app development services, app development company Uttar Pradesh, hybrid app development Hapur, mobile app design and development, startup app development company, app development agency Delhi NCR",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/mobile-app-development-in-hapur",
  },
  openGraph: {
    title: "Mobile App Development in Hapur | Android & iOS App Company",
    description:
      "Looking for mobile app development in Hapur? Zentrix Infotech builds Android, iOS & cross-platform apps that help local businesses grow online.",
    url: "https://www.zentrixinfotech.com/hapur/mobile-app-development-in-hapur",
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
    title: "Mobile App Development in Hapur | Android & iOS App Company",
    description:
      "Looking for mobile app development in Hapur? Zentrix Infotech builds Android, iOS & cross-platform apps that help local businesses grow online.",
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