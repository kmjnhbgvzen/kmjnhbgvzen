import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "iOS App Development Company in Moradabad | Zentrix",
  description:
    "Zentrix Infotech is an iOS app development company in Moradabad building secure, high-quality iPhone and iPad apps for businesses and startups. Get a free quote today.",
  keywords:
    "iOS app development company in Moradabad, iPhone app development company Moradabad, iOS app development services Moradabad, best iOS app development company Moradabad, custom iOS app development Moradabad, iPad app development Moradabad, Swift app development company Moradabad, affordable iOS app development Moradabad, iOS app development for startups Moradabad, iOS app development cost Moradabad, enterprise iOS app development Moradabad, iOS app development company near me, mobile app development company Moradabad, App Store app launch services, hire iOS app development company",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/iOS-app-development-company-in-moradabad",
  },


  openGraph: {
    title: "iOS App Development Company in Moradabad | Zentrix",
    description:
      "Zentrix Infotech is an iOS app development company in Moradabad building secure, high-quality iPhone and iPad apps for businesses and startups. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/moradabad/iOS-app-development-company-in-moradabad",
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
    title: "iOS App Development Company in Moradabad | Zentrix",
    description:
      "Zentrix Infotech is an iOS app development company in Moradabad building secure, high-quality iPhone and iPad apps for businesses and startups. Get a free quote today.",
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