import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Software Development Company in India | Zentrix Infotech",
  description:
    "Zentrix Infotech is a software development company in India offering custom software, web and mobile apps and cloud solutions to clients across India and abroad.",
  keywords:
    "software development company in India, custom software development company India, software development services India, IT company in India, software outsourcing India, hire software developers India, web and mobile app development India, enterprise software development India, affordable software development India, offshore software development India, ERP software development India, software company for startups India, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-development-company-in-india",
  },


  openGraph: {
    title: "Software Development Company in India | Zentrix Infotech",
    description:
      "Zentrix Infotech is a software development company in India offering custom software, web and mobile apps and cloud solutions to clients across India and abroad.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-company-in-india",
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
    title: "Software Development Company in India | Zentrix Infotech",
    description:
      "Zentrix Infotech is a software development company in India offering custom software, web and mobile apps and cloud solutions to clients across India and abroad.",
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