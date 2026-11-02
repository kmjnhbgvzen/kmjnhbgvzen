import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Software Development Company Near Moradabad | Zentrix Infotech",
  description:
    "Looking for a software development company near Moradabad? Zentrix Infotech builds custom software, web and mobile apps. 250+ projects. Call today.",
  keywords:
    "software development company near Moradabad, software company near Moradabad, custom software development near Moradabad, software developers near Moradabad, IT company near Moradabad, software development services Moradabad, web application development Moradabad, mobile app development near Moradabad, business software development Rampur, software company Bareilly, software company Sambhal, software company Amroha, software company Bijnor, ERP software development Moradabad, CRM software development Moradabad, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-development-company-near-moradabad",
  },


  openGraph: {
    title: "Software Development Company Near Moradabad | Zentrix Infotech",
    description:
      "Looking for a software development company near Moradabad? Zentrix Infotech builds custom software, web and mobile apps. 250+ projects. Call today.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-company-near-moradabad",
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
    title: "Software Development Company Near Moradabad | Zentrix Infotech",
    description:
      "Looking for a software development company near Moradabad? Zentrix Infotech builds custom software, web and mobile apps. 250+ projects. Call today.",
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