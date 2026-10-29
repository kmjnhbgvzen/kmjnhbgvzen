import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";



export const metadata = {
  title:
    "Software Development Company for Startups in Moradabad | Zentrix",
  description:
    "Zentrix Infotech is a Moradabad software development company for startups. Build your MVP, web app or mobile app at affordable rates. Get a free consultation.",
  keywords:
    "moradabad software development company for startups, software development company for startups moradabad, startup software development moradabad, MVP development company moradabad, affordable software development for startups, custom software for startups india, startup app development moradabad, web application development for startups, hire developers for startup moradabad, software company moradabad, startup technology partner moradabad, Zentrix Infotech startups",



  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-company-for-startups",
  },



  openGraph: {
    title:
      "Software Development Company for Startups in Moradabad | Zentrix",
    description:
      "Zentrix Infotech is a Moradabad software development company for startups. Build your MVP, web app or mobile app at affordable rates. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-company-for-startups",
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
      "Software Development Company for Startups in Moradabad | Zentrix",
    description:
      "Zentrix Infotech is a Moradabad software development company for startups. Build your MVP, web app or mobile app at affordable rates. Get a free consultation.",
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