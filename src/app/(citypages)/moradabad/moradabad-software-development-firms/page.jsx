import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Moradabad Software Development Firms: How to Compare | Zentrix",
  description:
    "Comparing Moradabad software development firms? Learn how to evaluate them and see why businesses choose Zentrix Infotech: 250+ projects, 4.7/5 rating, local support.",
  keywords:
    "moradabad software development firms, software development firms in moradabad, top software firms moradabad, best software firms moradabad, software firms near me moradabad, compare software companies moradabad, custom software firms moradabad, IT firms moradabad, software development company moradabad, hire software firm moradabad, local software firm moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-firms",
  },

  openGraph: {
    title: "Moradabad Software Development Firms: How to Compare | Zentrix",
    description:
      "Comparing Moradabad software development firms? Learn how to evaluate them and see why businesses choose Zentrix Infotech: 250+ projects, 4.7/5 rating, local support.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-firms",
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
    title: "Moradabad Software Development Firms: How to Compare | Zentrix",
    description:
      "Comparing Moradabad software development firms? Learn how to evaluate them and see why businesses choose Zentrix Infotech: 250+ projects, 4.7/5 rating, local support.",
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