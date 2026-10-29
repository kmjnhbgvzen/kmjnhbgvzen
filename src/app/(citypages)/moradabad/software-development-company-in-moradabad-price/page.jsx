import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title:
    "Software Development Company in Moradabad Price | Zentrix",
  description:
    "Know software development company in Moradabad price at Zentrix Infotech. Transparent rates for custom software, web and app projects. Get a free quote.",
  keywords:
    "software development company in moradabad price, software development cost in moradabad, custom software development price moradabad, software company in moradabad, affordable software development moradabad, software development rates moradabad, custom software cost india, business software development price, software development company moradabad, hire software developers moradabad, web and app development cost moradabad, Zentrix Infotech software development",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-development-company-in-moradabad-price",
  },


  openGraph: {
    title:
      "Software Development Company in Moradabad Price | Zentrix",
    description:
      "Know software development company in Moradabad price at Zentrix Infotech. Transparent rates for custom software, web and app projects. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-company-in-moradabad-price",
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
      "Software Development Company in Moradabad Price | Zentrix",
    description:
      "Know software development company in Moradabad price at Zentrix Infotech. Transparent rates for custom software, web and app projects. Get a free quote.",
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