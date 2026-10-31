import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Custom Software Development Services Moradabad | Zentrix",
  description:
    "Zentrix Infotech offers custom software development services in Moradabad: web apps, mobile apps, ERP, CRM and cloud solutions built for local businesses. Free quote.",
  keywords:
    "custom software development services moradabad, custom software development company moradabad, custom software developers moradabad, bespoke software development moradabad, software development services in moradabad, custom web application development moradabad, custom mobile app development moradabad, custom ERP software moradabad, custom CRM software moradabad, software company in moradabad, affordable custom software moradabad, software for exporters moradabad, software for small business moradabad, custom software development uttar pradesh, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/custom-software-development-services-moradabad",
  },

  openGraph: {
    title: "Custom Software Development Services Moradabad | Zentrix",
    description:
      "Zentrix Infotech offers custom software development services in Moradabad: web apps, mobile apps, ERP, CRM and cloud solutions built for local businesses. Free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/custom-software-development-services-moradabad",
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
    title: "Custom Software Development Services Moradabad | Zentrix",
    description:
      "Zentrix Infotech offers custom software development services in Moradabad: web apps, mobile apps, ERP, CRM and cloud solutions built for local businesses. Free quote.",
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