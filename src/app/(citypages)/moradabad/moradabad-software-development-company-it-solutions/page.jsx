import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";



export const metadata = {
  title:
    "Software Development Company & IT Solutions in Moradabad | Zentrix",
  description:
    "Zentrix Infotech is a Moradabad software development company offering IT solutions: custom software, web, mobile apps, cloud and digital marketing. Get a free quote.",
  keywords:
    "moradabad software development company it solutions, it solutions company in moradabad, software development company moradabad, it services moradabad, custom software development moradabad, business it solutions moradabad, cloud solutions company moradabad, web and app development moradabad, affordable it solutions company, it solutions for small business, it solutions company for startups, enterprise software solutions moradabad, Zentrix Infotech it solutions",



  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-company-it-solutions",
  },



  openGraph: {
    title:
      "Software Development Company & IT Solutions in Moradabad | Zentrix",
    description:
      "Zentrix Infotech is a Moradabad software development company offering IT solutions: custom software, web, mobile apps, cloud and digital marketing. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-company-it-solutions",
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
      "Software Development Company & IT Solutions in Moradabad | Zentrix",
    description:
      "Zentrix Infotech is a Moradabad software development company offering IT solutions: custom software, web, mobile apps, cloud and digital marketing. Get a free quote.",
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