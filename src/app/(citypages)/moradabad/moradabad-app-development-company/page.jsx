import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "App Development Company in Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a trusted app development company in Moradabad. We build secure Android, iOS and cross-platform apps with clear pricing and full launch support.",
  keywords:
    "app development company in Moradabad, mobile app development company in Moradabad, Android app development Moradabad, iOS app development Moradabad, app developers in Moradabad, best app development company in Moradabad, custom app development Moradabad, e-commerce app development Moradabad, affordable app development Moradabad, mobile app developers Moradabad, app development services Moradabad, Flutter app development Moradabad, software company in Moradabad, hire app developers Moradabad, app development company near me",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-app-development-company",
  },


  openGraph: {
    title: "App Development Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted app development company in Moradabad. We build secure Android, iOS and cross-platform apps with clear pricing and full launch support.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-app-development-company",
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
    title: "App Development Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted app development company in Moradabad. We build secure Android, iOS and cross-platform apps with clear pricing and full launch support.",
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