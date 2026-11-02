import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Software Development Company Moradabad Near Me | Zentrix",
  description:
    "Looking for a software development company in Moradabad near you? Visit or call Zentrix Infotech for custom software, web and mobile apps. Book a free meeting.",
  keywords:
    "software development company Moradabad near me, software company near me Moradabad, local software company Moradabad, software developers near me Moradabad, IT company near me Moradabad, custom software near me Moradabad, app development company near me Moradabad, software company Buddhi Vihar Moradabad, visit software company Moradabad, free software consultation Moradabad, Zentrix Infotech Moradabad",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-development-company-moradabad-near-me",
  },


  openGraph: {
    title: "Software Development Company Moradabad Near Me | Zentrix",
    description:
      "Looking for a software development company in Moradabad near you? Visit or call Zentrix Infotech for custom software, web and mobile apps. Book a free meeting.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-company-moradabad-near-me",
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
    title: "Software Development Company Moradabad Near Me | Zentrix",
    description:
      "Looking for a software development company in Moradabad near you? Visit or call Zentrix Infotech for custom software, web and mobile apps. Book a free meeting.",
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