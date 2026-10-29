import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Software Development Outsourcing in Moradabad | Zentrix Infotech",
  description:
    "Outsource software development to Zentrix Infotech in Moradabad. Get skilled developers, transparent pricing and on-time delivery for web, mobile and ERP projects.",
  keywords:
    "moradabad software development outsourcing, software development outsourcing moradabad, outsource software development india, software outsourcing company moradabad, outsourced software development services, IT outsourcing moradabad, offshore software development india, dedicated development team moradabad, outsource web development moradabad, outsource mobile app development india, software outsourcing services, hire developers moradabad, software development partner moradabad, software development company moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-outsourcing",
  },

  openGraph: {
    title:
      "Software Development Outsourcing in Moradabad | Zentrix Infotech",
    description:
      "Outsource software development to Zentrix Infotech in Moradabad. Get skilled developers, transparent pricing and on-time delivery for web, mobile and ERP projects.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-outsourcing",
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
      "Software Development Outsourcing in Moradabad | Zentrix Infotech",
    description:
      "Outsource software development to Zentrix Infotech in Moradabad. Get skilled developers, transparent pricing and on-time delivery for web, mobile and ERP projects.",
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