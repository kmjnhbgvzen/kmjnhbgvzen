import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Software Company in Lucknow – Custom Solutions | Zentrix",

  description:
    "Looking for a software company in Lucknow? Zentrix Infotech builds custom business software, web apps and mobile apps. Request a free consultation today.",

  keywords:
    "Software Company in Lucknow, custom software company in Lucknow, software development company in Lucknow, business software development in Lucknow, custom software development services in Lucknow, software solutions company in Lucknow, web application development in Lucknow, enterprise software company in Lucknow, software company for small business in Lucknow, software outsourcing company in Lucknow, affordable software development in Lucknow, ERP and CRM software in Lucknow, software developers in Lucknow, custom business software, off-the-shelf vs custom software, workflow automation software, internal tools and dashboards, software integration, scalable software architecture, software maintenance and support, how to choose a software company in Lucknow, custom software cost in Lucknow, how long does software development take",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/software-company-in-lucknow",
  },

  openGraph: {
    title: "Software Company in Lucknow – Custom Solutions | Zentrix",
    description:
      "Looking for a software company in Lucknow? Zentrix Infotech builds custom business software, web apps and mobile apps. Request a free consultation today.",
    url: "https://www.zentrixinfotech.com/lucknow/software-company-in-lucknow",
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
    title: "Software Company in Lucknow – Custom Solutions | Zentrix",
    description:
      "Looking for a software company in Lucknow? Zentrix Infotech builds custom business software, web apps and mobile apps. Request a free consultation today.",
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