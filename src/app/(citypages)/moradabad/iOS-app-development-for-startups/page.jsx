import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "iOS App Development for Startups | Zentrix Infotech",
  description:
    "Launch your startup with a fast, scalable iPhone app. Zentrix Infotech offers MVP development, Swift expertise, clear pricing and full App Store launch support.",
  keywords:
    "iOS app development for startups, startup iOS app development company, iPhone app development for startups, MVP development for startups, build an MVP iOS app, affordable iOS app development for startups, startup app development company India, iOS app development services, Swift app development for startups, hire iOS developers for startup, mobile app development for startups, startup app development cost, iOS MVP development, custom iOS app development, startup app launch strategy",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/iOS-app-development-for-startups",
  },


  openGraph: {
    title: "iOS App Development for Startups | Zentrix Infotech",
    description:
      "Launch your startup with a fast, scalable iPhone app. Zentrix Infotech offers MVP development, Swift expertise, clear pricing and full App Store launch support.",
    url: "https://www.zentrixinfotech.com/moradabad/iOS-app-development-for-startups",
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
    title: "iOS App Development for Startups | Zentrix Infotech",
    description:
      "Launch your startup with a fast, scalable iPhone app. Zentrix Infotech offers MVP development, Swift expertise, clear pricing and full App Store launch support.",
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