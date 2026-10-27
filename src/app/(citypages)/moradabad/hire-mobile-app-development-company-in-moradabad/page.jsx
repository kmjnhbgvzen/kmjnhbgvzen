import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Hire Mobile App Development Company in Moradabad | Zentrix",
  description:
    "Hire a trusted mobile app development company in Moradabad. Zentrix Infotech builds Android, iOS and cross-platform apps with clear pricing and full support. Get a free quote.",
  keywords:
    "hire mobile app development company in Moradabad, mobile app development company Moradabad, hire app development company Moradabad, hire mobile app developers Moradabad, android app development company Moradabad, iOS app development company Moradabad, custom mobile app development Moradabad, affordable mobile app development Moradabad, mobile app development services Moradabad, app development company near me, how to choose app development company, mobile app development agency Moradabad, cross platform app development Moradabad, app development partner for business, mobile app development quote Moradabad",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/hire-mobile-app-development-company-in-moradabad",
  },


  openGraph: {
    title: "Hire Mobile App Development Company in Moradabad | Zentrix",
    description:
      "Hire a trusted mobile app development company in Moradabad. Zentrix Infotech builds Android, iOS and cross-platform apps with clear pricing and full support. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/hire-mobile-app-development-company-in-moradabad",
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
    title: "Hire Mobile App Development Company in Moradabad | Zentrix",
    description:
      "Hire a trusted mobile app development company in Moradabad. Zentrix Infotech builds Android, iOS and cross-platform apps with clear pricing and full support. Get a free quote.",
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