import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Moradabad Software Development Company | Zentrix Infotech",
  description:
    "Zentrix Infotech is a Moradabad software development company building custom software, web apps, ERP, CRM and mobile apps for local businesses. Get a free quote.",
  keywords:
    "Moradabad software development company, software development company Moradabad, Moradabad software company, custom software Moradabad, Moradabad IT company, Moradabad web and app development company, ERP software company Moradabad, CRM software company Moradabad, software company near me Moradabad, local software development company, business software Moradabad, software solutions for Moradabad businesses, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-company",
  },

  openGraph: {
    title:
      "Moradabad Software Development Company | Zentrix Infotech",
    description:
      "Zentrix Infotech is a Moradabad software development company building custom software, web apps, ERP, CRM and mobile apps for local businesses. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-company",
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
    title:
      "Moradabad Software Development Company | Zentrix Infotech",
    description:
      "Zentrix Infotech is a Moradabad software development company building custom software, web apps, ERP, CRM and mobile apps for local businesses. Get a free quote.",
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