import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Best Software Development Company Moradabad | Zentrix Infotech",
  description:
    "Looking for the best software development company in Moradabad? Learn how to judge skills, security, pricing and support, and why businesses choose Zentrix Infotech.",
  keywords:
    "best software development company Moradabad, top software development company Moradabad, best software developers Moradabad, trusted software development company Moradabad, best custom software development Moradabad, best ERP software company Moradabad, reliable software company near me, software development company with portfolio, how to choose software development company, affordable software development company Moradabad, enterprise software development Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-software-development-company-moradabad",
  },

  openGraph: {
    title:
      "Best Software Development Company Moradabad | Zentrix Infotech",
    description:
      "Looking for the best software development company in Moradabad? Learn how to judge skills, security, pricing and support, and why businesses choose Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/best-software-development-company-moradabad",
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
      "Best Software Development Company Moradabad | Zentrix Infotech",
    description:
      "Looking for the best software development company in Moradabad? Learn how to judge skills, security, pricing and support, and why businesses choose Zentrix Infotech.",
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