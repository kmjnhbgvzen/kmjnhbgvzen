import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "iOS App Development Outsourcing | Zentrix Infotech",
  description:
    "Outsource iOS app development to Zentrix Infotech. Dedicated Swift developers, transparent pricing, App Store launch support and NDA-protected delivery.",
  keywords:
    "iOS app development outsourcing, outsource iOS app development, iOS app development outsourcing India, offshore iOS app development, iOS app development company, hire iOS developers, dedicated iOS developers India, outsourced iPhone app development, iOS app development services, Swift app development company, affordable iOS app development, iPhone app development outsourcing, iOS app outsourcing company, iOS app development cost, mobile app development outsourcing",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/iOS-app-development-outsourcing",
  },


  openGraph: {
    title: "iOS App Development Outsourcing | Zentrix Infotech",
    description:
      "Outsource iOS app development to Zentrix Infotech. Dedicated Swift developers, transparent pricing, App Store launch support and NDA-protected delivery.",
    url: "https://www.zentrixinfotech.com/moradabad/iOS-app-development-outsourcing",
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
    title: "iOS App Development Outsourcing | Zentrix Infotech",
    description:
      "Outsource iOS app development to Zentrix Infotech. Dedicated Swift developers, transparent pricing, App Store launch support and NDA-protected delivery.",
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