import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Software Development Company Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a software development company in Moradabad building custom software, web and mobile apps, ERP and cloud solutions. 250+ projects. Call now.",
  keywords:
    "software development company Moradabad, software company Moradabad, custom software development Moradabad, software developers Moradabad, IT company Moradabad, business software development Moradabad, web application development Moradabad, mobile app development Moradabad, ERP software development Moradabad, CRM software development Moradabad, software outsourcing Moradabad, cloud solutions Moradabad, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-development-company-moradabad",
  },


  openGraph: {
    title: "Software Development Company Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a software development company in Moradabad building custom software, web and mobile apps, ERP and cloud solutions. 250+ projects. Call now.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-company-moradabad",
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
    title: "Software Development Company Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a software development company in Moradabad building custom software, web and mobile apps, ERP and cloud solutions. 250+ projects. Call now.",
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