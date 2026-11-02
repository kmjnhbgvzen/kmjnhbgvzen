import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Software Development Cost in Moradabad | Zentrix Infotech",
  description:
    "Wondering about software development cost in Moradabad? See what affects pricing, typical ranges and how to save. Get a free quote from Zentrix Infotech.",
  keywords:
    "software development cost in Moradabad, custom software development cost Moradabad, how much does software development cost, software development pricing Moradabad, software development company cost, cost of business software Moradabad, ERP software cost Moradabad, mobile app development cost Moradabad, web application development cost, affordable software development Moradabad, software quote Moradabad, fixed price software development, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-development-cost-in-moradabad",
  },


  openGraph: {
    title: "Software Development Cost in Moradabad | Zentrix Infotech",
    description:
      "Wondering about software development cost in Moradabad? See what affects pricing, typical ranges and how to save. Get a free quote from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-cost-in-moradabad",
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
    title: "Software Development Cost in Moradabad | Zentrix Infotech",
    description:
      "Wondering about software development cost in Moradabad? See what affects pricing, typical ranges and how to save. Get a free quote from Zentrix Infotech.",
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