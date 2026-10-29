import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Software Development Company Near Me in Moradabad | Zentrix Infotech",
  description:
    "Looking for a software development company near you in Moradabad? Zentrix Infotech builds custom web, mobile and ERP software. Visit our office or call for a free quote.",
  keywords:
    "software development company near me moradabad, software development company near me, software company near me moradabad, software developers near me moradabad, local software development company moradabad, best software development company near me, custom software development near me, IT company near me moradabad, app development company near me moradabad, website development company near me moradabad, software development company in moradabad, software development services moradabad, hire software developers moradabad, affordable software company moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-development-company-near-me-moradabad",
  },

  openGraph: {
    title:
      "Software Development Company Near Me in Moradabad | Zentrix Infotech",
    description:
      "Looking for a software development company near you in Moradabad? Zentrix Infotech builds custom web, mobile and ERP software. Visit our office or call for a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-company-near-me-moradabad",
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
      "Software Development Company Near Me in Moradabad | Zentrix Infotech",
    description:
      "Looking for a software development company near you in Moradabad? Zentrix Infotech builds custom web, mobile and ERP software. Visit our office or call for a free quote.",
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