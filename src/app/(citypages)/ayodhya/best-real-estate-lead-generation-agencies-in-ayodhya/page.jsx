import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Best Real Estate Lead Generation Agencies in Ayodhya",
  description:
    "Compare the best real estate lead generation agencies in Ayodhya, their services, and pricing to hire the right partner and start getting leads.",
  keywords:
    "best real estate lead generation agencies in Ayodhya, real estate lead generation agency Ayodhya, top real estate marketing agency Ayodhya, real estate leads agency Ayodhya, property lead generation Ayodhya, real estate PPC agency Ayodhya, real estate SEO agency Ayodhya, real estate digital marketing agency Ayodhya, hire real estate marketing agency Ayodhya, property marketing agency Ayodhya, real estate lead agency near me Ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/best-real-estate-lead-generation-agencies-ayodhya",
  },
  openGraph: {
    title: "Best Real Estate Lead Generation Agencies in Ayodhya",
    description:
      "Compare the best real estate lead generation agencies in Ayodhya, their services, and pricing to hire the right partner and start getting leads.",
    url: "https://www.zentrixinfotech.com/ayodhya/best-real-estate-lead-generation-agencies-ayodhya",
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
    title: "Best Real Estate Lead Generation Agencies in Ayodhya",
    description:
      "Compare the best real estate lead generation agencies in Ayodhya, their services, and pricing to hire the right partner and start getting leads.",
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