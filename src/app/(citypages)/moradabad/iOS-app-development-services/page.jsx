import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "iOS App Development Services | Zentrix Infotech",
  description:
    "Explore iOS app development services from Zentrix Infotech: custom iPhone and iPad apps, UI/UX design, App Store launch, integrations and ongoing support. Get a free quote.",
  keywords:
    "iOS app development services, custom iOS app development services, iPhone app development services, iPad app development services, iOS app design services, iOS app development solutions, iOS app maintenance and support, enterprise iOS app development services, iOS e-commerce app development, App Store submission services, Swift app development services, iOS app migration and upgrade services, iOS app testing services, affordable iOS app development services, iOS app development services in Moradabad",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/iOS-app-development-services",
  },


  openGraph: {
    title: "iOS App Development Services | Zentrix Infotech",
    description:
      "Explore iOS app development services from Zentrix Infotech: custom iPhone and iPad apps, UI/UX design, App Store launch, integrations and ongoing support. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/iOS-app-development-services",
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
    title: "iOS App Development Services | Zentrix Infotech",
    description:
      "Explore iOS app development services from Zentrix Infotech: custom iPhone and iPad apps, UI/UX design, App Store launch, integrations and ongoing support. Get a free quote.",
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