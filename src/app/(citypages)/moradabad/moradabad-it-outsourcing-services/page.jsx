import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "IT Outsourcing Services in Moradabad | Zentrix Infotech",
  description:
    "Looking for IT outsourcing services in Moradabad? Zentrix Infotech offers development, cloud, design and support teams at lower cost. Get a free consultation.",
  keywords:
    "Moradabad IT outsourcing services, IT outsourcing company Moradabad, IT outsourcing services in India, outsource IT services Moradabad, software outsourcing Moradabad, web development outsourcing Moradabad, mobile app outsourcing Moradabad, IT support outsourcing, outsource software development India, dedicated development team Moradabad, offshore development team India, IT outsourcing for small business, managed IT services Moradabad, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-it-outsourcing-services",
  },


  openGraph: {
    title: "IT Outsourcing Services in Moradabad | Zentrix Infotech",
    description:
      "Looking for IT outsourcing services in Moradabad? Zentrix Infotech offers development, cloud, design and support teams at lower cost. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-it-outsourcing-services",
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
    title: "IT Outsourcing Services in Moradabad | Zentrix Infotech",
    description:
      "Looking for IT outsourcing services in Moradabad? Zentrix Infotech offers development, cloud, design and support teams at lower cost. Get a free consultation.",
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