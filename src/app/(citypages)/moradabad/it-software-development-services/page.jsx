import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "IT Software Development Services | Zentrix Infotech",
  description:
    "Complete IT software development services from Zentrix Infotech: planning, design, development, testing, cloud deployment and support. Get a free consultation.",
  keywords:
    "IT software development services, software development services India, custom software development services, end-to-end software development, software development lifecycle services, software modernization services, legacy software migration, software testing services, software maintenance and support, cloud deployment services, web and mobile app development services, enterprise software development services, software product development, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/it-software-development-services",
  },


  openGraph: {
    title: "IT Software Development Services | Zentrix Infotech",
    description:
      "Complete IT software development services from Zentrix Infotech: planning, design, development, testing, cloud deployment and support. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/moradabad/it-software-development-services",
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
    title: "IT Software Development Services | Zentrix Infotech",
    description:
      "Complete IT software development services from Zentrix Infotech: planning, design, development, testing, cloud deployment and support. Get a free consultation.",
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