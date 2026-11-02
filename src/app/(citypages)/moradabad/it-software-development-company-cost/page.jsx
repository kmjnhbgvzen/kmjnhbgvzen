import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";



export const metadata = {
  title: "IT Software Development Company Cost in India | Zentrix Infotech",
  description:
    "Find out what an IT software development company charges in India. See cost by project type, pricing models, hidden costs and savings tips from Zentrix Infotech.",
  keywords:
    "it software development company cost, software development company cost in india, custom software development cost, software development pricing india, cost to build custom software, software development cost estimate, mvp development cost india, software development hourly rate india, fixed price software development, software development company in moradabad, custom software development services, affordable software development company",



  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/it-software-development-company-cost",
  },



  openGraph: {
    title: "IT Software Development Company Cost in India | Zentrix Infotech",
    description:
      "Find out what an IT software development company charges in India. See cost by project type, pricing models, hidden costs and savings tips from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/it-software-development-company-cost",
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
    title: "IT Software Development Company Cost in India | Zentrix Infotech",
    description:
      "Find out what an IT software development company charges in India. See cost by project type, pricing models, hidden costs and savings tips from Zentrix Infotech.",
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