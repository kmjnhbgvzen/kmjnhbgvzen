import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Moradabad App Development Company Reviews | Zentrix Infotech",
  description:
    "Read how to judge app development company reviews in Moradabad and see why clients trust Zentrix Infotech: 250+ projects, 270+ clients and a 4.7/5 rating.",
  keywords:
    "Moradabad app development company reviews, app development company reviews Moradabad, best app development company in Moradabad, Zentrix Infotech reviews, mobile app development company Moradabad reviews, app developers in Moradabad ratings, trusted app development company Moradabad, top app development companies in Moradabad, app development company client feedback, how to choose app development company Moradabad, Android app development Moradabad, iOS app development Moradabad, software company in Moradabad reviews, app development company near me, custom app development Moradabad",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-app-development-company-reviews",
  },


  openGraph: {
    title: "Moradabad App Development Company Reviews | Zentrix Infotech",
    description:
      "Read how to judge app development company reviews in Moradabad and see why clients trust Zentrix Infotech: 250+ projects, 270+ clients and a 4.7/5 rating.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-app-development-company-reviews",
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
    title: "Moradabad App Development Company Reviews | Zentrix Infotech",
    description:
      "Read how to judge app development company reviews in Moradabad and see why clients trust Zentrix Infotech: 250+ projects, 270+ clients and a 4.7/5 rating.",
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