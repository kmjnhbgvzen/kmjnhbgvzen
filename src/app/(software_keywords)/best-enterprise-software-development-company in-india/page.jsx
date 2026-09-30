import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Enterprise Software Company in India | Zentrix Infotech",

  description:
    "Looking for the best enterprise software development company in India? Zentrix Infotech builds secure, scalable custom software, apps and cloud solutions.",

  keywords:
    "best enterprise software development company in India, enterprise software development company India, custom enterprise software development, enterprise application development India, enterprise software solutions, top software development company in India, custom software development services, enterprise mobile app development, cloud solutions for enterprises, ERP and CRM development India, software development company Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/best-enterprise-software-company-in-india",
  },

  openGraph: {
    title: "Best Enterprise Software Company in India | Zentrix Infotech",

    description:
      "Looking for the best enterprise software development company in India? Zentrix Infotech builds secure, scalable custom software, apps and cloud solutions.",

    url: "https://www.zentrixinfotech.com/best-enterprise-software-development-company-in-india",

    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Enterprise Software Company in India | Zentrix Infotech",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Best Enterprise Software Company in India | Zentrix Infotech",

    description:
      "Looking for the best enterprise software development company in India? Zentrix Infotech builds secure, scalable custom software, apps and cloud solutions.",

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