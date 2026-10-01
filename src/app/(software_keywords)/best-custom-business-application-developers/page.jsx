import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Custom Business Application Developers | Zentrix Infotech",

  description:
    "Looking for the best custom business application developers? Learn how to evaluate teams, compare costs and see why Zentrix Infotech builds scalable apps.",

  keywords:
    "best custom business application developers, custom business application development company, custom business app developers India, bespoke business software developers, custom software development company, enterprise application developers, business software solutions company, custom web application development, custom mobile app development for business, hire custom application developers, custom CRM and ERP development, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/best-custom-business-application-developers",
  },

  openGraph: {
    title: "Best Custom Business Application Developers | Zentrix Infotech",

    description:
      "Looking for the best custom business application developers? Learn how to evaluate teams, compare costs and see why Zentrix Infotech builds scalable apps.",

    url: "https://www.zentrixinfotech.com/best-custom-business-application-developers",

    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Custom Business Application Developers | Zentrix Infotech",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Best Custom Business Application Developers | Zentrix Infotech",

    description:
      "Looking for the best custom business application developers? Learn how to evaluate teams, compare costs and see why Zentrix Infotech builds scalable apps.",

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
