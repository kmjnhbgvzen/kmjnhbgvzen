import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Software Development Company India | Zentrix Infotech",
  description:
    "Zentrix Infotech is a software development company in India delivering custom software, web, mobile and cloud solutions for startups and SMEs. Get a free quote.",
  keywords:
    "software development company india, custom software development company india, software development services india, best software development company in india, software development company for startups, enterprise software development india, web application development company india, mobile app development company india, offshore software development india, affordable software development company, software outsourcing india, cloud software solutions india, UI UX design company india, business software solutions india, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-development-company-india",
  },

  openGraph: {
    title: "Software Development Company India | Zentrix Infotech",
    description:
      "Zentrix Infotech is a software development company in India delivering custom software, web, mobile and cloud solutions for startups and SMEs. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-company-india",
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
    title: "Software Development Company India | Zentrix Infotech",
    description:
      "Zentrix Infotech is a software development company in India delivering custom software, web, mobile and cloud solutions for startups and SMEs. Get a free quote.",
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