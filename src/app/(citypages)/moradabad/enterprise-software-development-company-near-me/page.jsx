import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Enterprise Software Development Company Near Me | Zentrix",
  description:
    "Looking for an enterprise software development company near you? Zentrix Infotech builds secure, scalable ERP, CRM and custom systems from Moradabad and Ghaziabad.",
  keywords:
    "enterprise software development company near me, enterprise software company near me, enterprise software developers near me, custom software development company near me, ERP development company near me, enterprise application development near me, local enterprise software company, software development company near me, enterprise software solutions near me, hire enterprise software developers near me, enterprise software development Moradabad, enterprise software development Ghaziabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/enterprise-software-development-company-near-me",
  },

  openGraph: {
    title: "Enterprise Software Development Company Near Me | Zentrix",
    description:
      "Looking for an enterprise software development company near you? Zentrix Infotech builds secure, scalable ERP, CRM and custom systems from Moradabad and Ghaziabad.",
    url: "https://www.zentrixinfotech.com/moradabad/enterprise-software-development-company-near-me",
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
    title: "Enterprise Software Development Company Near Me | Zentrix",
    description:
      "Looking for an enterprise software development company near you? Zentrix Infotech builds secure, scalable ERP, CRM and custom systems from Moradabad and Ghaziabad.",
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