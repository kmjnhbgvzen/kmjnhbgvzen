import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "How to Build an iOS App: Step-by-Step Guide | Zentrix Infotech",
  description:
    "Learn how to build an iOS app step by step: idea, design, Swift development, testing, App Store launch and cost. Expert guidance from Zentrix Infotech.",
  keywords:
    "how to build an iOS app, how to create an iOS app, how to develop an iOS app, iOS app development process, build an iPhone app, iOS app development steps, iOS app development guide, create an iPhone app from scratch, Swift app development, SwiftUI app development, how to publish an app on the App Store, iOS app development cost, iOS app development company, iOS app development services, iPhone app development for beginners",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/how-to-build-an-iOS-app",
  },


  openGraph: {
    title: "How to Build an iOS App: Step-by-Step Guide | Zentrix Infotech",
    description:
      "Learn how to build an iOS app step by step: idea, design, Swift development, testing, App Store launch and cost. Expert guidance from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/how-to-build-an-iOS-app",
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
    title: "How to Build an iOS App: Step-by-Step Guide | Zentrix Infotech",
    description:
      "Learn how to build an iOS app step by step: idea, design, Swift development, testing, App Store launch and cost. Expert guidance from Zentrix Infotech.",
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