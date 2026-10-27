import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "iOS App Developer in Moradabad | Zentrix Infotech",
  description:
    "Looking for an iOS app developer in Moradabad? Zentrix Infotech’s Swift developers build secure, high-quality iPhone and iPad apps. Get a free consultation and quote.",
  keywords:
    "iOS app developer Moradabad, iPhone app developer Moradabad, hire iOS app developer Moradabad, iOS app development Moradabad, iOS app development company Moradabad, Swift developer Moradabad, freelance iOS developer vs company, iPad app developer Moradabad, affordable iOS app developer, custom iOS app development Moradabad, iOS developer for startups, hire iOS developers India, iOS app developer near me, mobile app developers Moradabad, iOS app development cost Moradabad",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/iOS-app-developer-moradabad",
  },


  openGraph: {
    title: "iOS App Developer in Moradabad | Zentrix Infotech",
    description:
      "Looking for an iOS app developer in Moradabad? Zentrix Infotech’s Swift developers build secure, high-quality iPhone and iPad apps. Get a free consultation and quote.",
    url: "https://www.zentrixinfotech.com/moradabad/iOS-app-developer-moradabad",
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
    title: "iOS App Developer in Moradabad | Zentrix Infotech",
    description:
      "Looking for an iOS app developer in Moradabad? Zentrix Infotech’s Swift developers build secure, high-quality iPhone and iPad apps. Get a free consultation and quote.",
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