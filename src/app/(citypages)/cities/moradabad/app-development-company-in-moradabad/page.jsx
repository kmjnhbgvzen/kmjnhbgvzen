import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "App Development Company in Moradabad | Android & Web Apps",
  
  description:
    "Looking for an app development company in Moradabad? We create business-focused mobile apps that drive growth and efficiency.",

  keywords:
    "app development company Moradabad, mobile app development Moradabad, android app developer Moradabad, business app development Moradabad",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/app-development-company-in-moradabad",
  },
  

  // ✅ OPEN GRAPH (SOCIAL SHARING)
  openGraph: {
    title:
      "App Development Company in Moradabad | Android & Web Apps",

    description:
      "Looking for an app development company in Moradabad? We create business-focused mobile apps that drive growth and efficiency.",

    url: "https://www.zentrixinfotech.com/cities/moradabad/app-development-company-in-moradabad ",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "App Development Company in Moradabad | Android & Web Apps",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "App Development Company in Moradabad | Android & Web Apps",

    description:
      "Looking for an app development company in Moradabad? We create business-focused mobile apps that drive growth and efficiency.",

    images: ["https://zentrixinfotech.com/zentrix_logo.jpg"],
  },

  // ✅ FAVICON
  icons: {
    icon: "/favicon.ico",
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