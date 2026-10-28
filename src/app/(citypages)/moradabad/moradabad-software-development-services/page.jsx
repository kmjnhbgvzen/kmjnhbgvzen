import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Moradabad Software Development Services | Zentrix Infotech",
  description:
    "Software development services in Moradabad: custom software, web apps, ERP, CRM, mobile apps and integration. Zentrix Infotech delivers on time. Get a free quote.",
  keywords:
    "Moradabad software development services, software development services in Moradabad, custom software development services Moradabad, web application development services, ERP development services Moradabad, CRM development services Moradabad, mobile app development services Moradabad, software integration services, software maintenance and support services, software testing services, IT software services Moradabad, business software development services, software development outsourcing Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-services",
  },

  openGraph: {
    title:
      "Moradabad Software Development Services | Zentrix Infotech",
    description:
      "Software development services in Moradabad: custom software, web apps, ERP, CRM, mobile apps and integration. Zentrix Infotech delivers on time. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-services",
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
      "Moradabad Software Development Services | Zentrix Infotech",
    description:
      "Software development services in Moradabad: custom software, web apps, ERP, CRM, mobile apps and integration. Zentrix Infotech delivers on time. Get a free quote.",
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