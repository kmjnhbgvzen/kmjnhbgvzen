import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Enterprise Software Development Cost in Moradabad | Zentrix Infotech",
  description:
    "What does enterprise software development cost in Moradabad? Learn the cost factors, pricing models and savings tips, then get a free quote from Zentrix Infotech.",
  keywords:
    "enterprise software development cost moradabad, enterprise software cost moradabad, enterprise software pricing moradabad, cost of custom enterprise software moradabad, ERP development cost moradabad, CRM development cost moradabad, enterprise application development cost, software development cost moradabad, enterprise software quote moradabad, affordable enterprise software moradabad, enterprise software development company moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/enterprise-software-development-cost-moradabad",
  },

  openGraph: {
    title: "Enterprise Software Development Cost in Moradabad | Zentrix Infotech",
    description:
      "What does enterprise software development cost in Moradabad? Learn the cost factors, pricing models and savings tips, then get a free quote from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/enterprise-software-development-cost-moradabad",
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
    title: "Enterprise Software Development Cost in Moradabad | Zentrix Infotech",
    description:
      "What does enterprise software development cost in Moradabad? Learn the cost factors, pricing models and savings tips, then get a free quote from Zentrix Infotech.",
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