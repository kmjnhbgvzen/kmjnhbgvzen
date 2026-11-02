import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Software Development Company Near Me | Zentrix Infotech",
  description:
    "Searching for a software development company near me? Zentrix Infotech offers custom software, web and mobile apps from Moradabad and Ghaziabad. Call today.",
  keywords:
    "software development company near me, software company near me, custom software development near me, software developers near me, IT company near me, app development company near me, web development company near me, local software development company, software development services near me, hire software developers near me, best software company near me, business software development near me, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-development-company-near-me",
  },


  openGraph: {
    title: "Software Development Company Near Me | Zentrix Infotech",
    description:
      "Searching for a software development company near me? Zentrix Infotech offers custom software, web and mobile apps from Moradabad and Ghaziabad. Call today.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-company-near-me",
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
    title: "Software Development Company Near Me | Zentrix Infotech",
    description:
      "Searching for a software development company near me? Zentrix Infotech offers custom software, web and mobile apps from Moradabad and Ghaziabad. Call today.",
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